import admin from 'firebase-admin';

const categories = [
  "tecnologia",
  "viajes",
  "educacion",
  "politica",
  "nutricion",
  "moda",
  "motor",
  "finanzas",
  "salud",
  "gaming",
  "entretenimiento",
  "deportes",
  "terror"
];


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
  const finalContent = content.toString('utf8');

  const titleMatch = finalContent.match(/<h1 class='text-2xl text-center'><strong>(.*?)<\/strong><\/h1>/);
  const articleTitle = titleMatch ? titleMatch[1] : 'Título no encontrado';

  const match = finalContent.match(/<p>(.*?)<\/p>/);
  const articleFirstPhrase = match ? match[1].split('.')[0] : 'Leer más';

  return {finalContent,articleTitle,articleFirstPhrase};
}



async function getArticleImage(id, category) {
  try {
    const file = storage.bucket().file(`images/${category}/${id}.webp`);
    const [content] = await file.download();
    const base64Image = content.toString('base64');
    return `data:image/webp;base64,${base64Image}`;
  } catch (error) {
    console.error(`Error fetching image for ${id}:`, error);
    return 'default_image.png'; // Asegúrate de tener una imagen por defecto
  }
}

async function fetchData2(titles, category) {
  const articles = [];
  const date = new Date();
  const day = date.getDate().toString();

  for (const title of titles) {
      const newCategory = category.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      try {
        const {finalContent,articleTitle,articleFirstPhrase} =  await getArticleContent(title,newCategory);
        console.log(title);
        const image = await getArticleImage(title, newCategory);
        if (image != "default_image.png"){
          articles.push({
            title: articleTitle,
            image,
            cleanTitle: title,
            category: category.toUpperCase(),
            phrase: articleFirstPhrase,
            newCategory,
            date: title.slice(0,10),
            content: finalContent,
          });
        }
      } catch (error) {
        console.error(`Error fetching data for ${title}:`, error);
      }    
  }
  return articles;
}


const allArticles2 = await Promise.all([
  fetchData2(await listArticleTitles('deportes'), 'deportes'),
  fetchData2(await listArticleTitles('educacion'), 'educación'),
  fetchData2(await listArticleTitles('gaming'), 'gaming'),
  fetchData2(await listArticleTitles('entretenimiento'), 'entretenimiento'),
  fetchData2(await listArticleTitles('finanzas'), 'finanzas'),
  fetchData2(await listArticleTitles('salud'), 'salud'),
  fetchData2(await listArticleTitles('tecnologia'), 'tecnología'),
  fetchData2(await listArticleTitles('viajes'), 'viajes'),
  fetchData2(await listArticleTitles('politica'), 'política'),
  fetchData2(await listArticleTitles('moda'), 'moda'),
  fetchData2(await listArticleTitles('motor'), 'motor'),
  fetchData2(await listArticleTitles('nutricion'), 'nutrición'),
  fetchData2(await listArticleTitles('terror'), 'terror'),
]);

const articles2 = allArticles2.flat();


export {storage,articles2,categories};
