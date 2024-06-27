import admin from 'firebase-admin';
import fs from 'fs/promises';

const serviceAccount = { 
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.CLIENT_EMAIL,
};

if (!admin.apps.length) { 
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "social-crash.appspot.com",
  });
} 

const storage = admin.storage();

const categories = [
  "tecnologia",
  "deportes",
  "salud",
  "educacion",
  "entretenimiento",
  "moda",
  "motor",
  "gaming",
  "finanzas",
  "nutricion",
  "politica",
  "viajes"
]

async function listArticleTitles(category) {
  const titles = [];
  const [files] = await storage.bucket().getFiles({ prefix: `articulos/${category}/` });
  for (const file of files) {
    const fileName = file.name.replace(`articulos/${category}/`, '').replace('.html', '');
    titles.push(fileName);
  }
  return titles;
}

async function getArticleContent(id, category) {
  const file = storage.bucket().file(`articulos/${category}/${id}.html`);
  const [content] = await file.download();
  return content.toString('utf8');
}

async function getArticleTitle(id, category) {
  const articleContent = await getArticleContent(id, category);
  const titleMatch = articleContent.match(/<h1 class='text-2xl text-center'><strong>(.*?)<\/strong><\/h1>/);
  const articleTitle = titleMatch ? titleMatch[1] : 'Título no encontrado';
  return articleTitle;
}

async function getArticleImage(id, category) {
  try {
    const file = storage.bucket().file(`images/${category}/${id}.png`);
    const [content] = await file.download();
    const base64Image = content.toString('base64');
    return `data:image/png;base64,${base64Image}`;
  } catch (error) {
    console.error(`Error fetching image for ${id}:`, error);
    return 'default_image.png'; // Asegúrate de tener una imagen por defecto
  }
}

async function getArticleFirstPhrase(id, category) {
  const articleContent = await getArticleContent(id, category);
  const match = articleContent.match(/<p>(.*?)<\/p>/);
  const primerOracion = match ? match[1].split('.')[0] : 'Leer más';
  return primerOracion;
}

async function fetchData(titles, category) {
  const articles = [];
  const date = new Date();
  const day = date.getDate().toString();

  for (const title of titles) {
    if (title.startsWith(day)) {
      const newCategory = category.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      try {
        const image = await getArticleImage(title, newCategory);
        const articleTitle = await getArticleTitle(title, newCategory);
        const articleFirstPhrase = await getArticleFirstPhrase(title, newCategory);
        articles.push({
          title: articleTitle,
          image,
          cleanTitle: title,
          category: category.toUpperCase(),
          phrase: articleFirstPhrase,
          newCategory,
        });
      } catch (error) {
        console.error(`Error fetching data for ${title}:`, error);
      }
    }
  }
  return articles;
}

async function fetchData2(titles, category) {
  const articles = [];
  const date = new Date();
  const day = date.getDate().toString();

  for (const title of titles) {
      const newCategory = category.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      try {
        const image = await getArticleImage(title, newCategory);
        const articleTitle = await getArticleTitle(title, newCategory);
        const articleFirstPhrase = await getArticleFirstPhrase(title, newCategory);
        articles.push({
          title: articleTitle,
          image,
          cleanTitle: title,
          category: category.toUpperCase(),
          phrase: articleFirstPhrase,
          newCategory,
        });
      } catch (error) {
        console.error(`Error fetching data for ${title}:`, error);
      }
    
  }
  return articles;
}

const allArticles = await Promise.all([
  fetchData(await listArticleTitles('deportes'), 'deportes'),
  fetchData(await listArticleTitles('educacion'), 'educación'),
  fetchData(await listArticleTitles('gaming'), 'gaming'),
  fetchData(await listArticleTitles('entretenimiento'), 'entretenimiento'),
  fetchData(await listArticleTitles('finanzas'), 'finanzas'),
  fetchData(await listArticleTitles('salud'), 'salud'),
  fetchData(await listArticleTitles('tecnologia'), 'tecnología'),
  fetchData(await listArticleTitles('viajes'), 'viajes'),
  fetchData(await listArticleTitles('politica'), 'política'),
  fetchData(await listArticleTitles('moda'), 'moda'),
  fetchData(await listArticleTitles('motor'), 'motor'),
  fetchData(await listArticleTitles('nutricion'), 'nutrición'),
]);

const articles = allArticles.flat();

const articlesDeporte = await fetchData2(await listArticleTitles('deportes'), 'deportes');
const articlesEducacion = await fetchData2(await listArticleTitles('educacion'), 'educación');
const articlesEntretenimiento = await fetchData2(await listArticleTitles('entretenimiento'), 'entretenimiento');
const articlesFinanzas = await fetchData2(await listArticleTitles('finanzas'), 'finanzas');
const articlesGaming = await fetchData2(await listArticleTitles('gaming'), 'gaming');
const articlesModa = await fetchData2(await listArticleTitles('moda'), 'moda');
const articlesMotor = await fetchData2(await listArticleTitles('motor'), 'motor');
const articlesNutricion = await fetchData2(await listArticleTitles('nutricion'), 'nutrición');
const articlesPolitica = await fetchData2(await listArticleTitles('politica'), 'política');
const articlesSalud = await fetchData2(await listArticleTitles('salud'), 'salud');
const articlesTecnologia = await fetchData2(await listArticleTitles('tecnologia'), 'tecnología');
const articlesViajes = await fetchData2(await listArticleTitles('viajes'), 'viajes');

export {storage, articles,articlesDeporte,getArticleContent,articlesEducacion,articlesEntretenimiento,articlesFinanzas,articlesGaming,articlesModa,articlesMotor,articlesNutricion,articlesPolitica,articlesSalud,articlesTecnologia,articlesViajes};
