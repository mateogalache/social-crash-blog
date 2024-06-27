import admin from 'firebase-admin';
import fs from 'fs/promises';

const serviceAccount = { 
  type: 'service_account',
  project_id: 'social-crash',
  private_key_id: '782713358869cec874708590962e3b49bb96fbb4',
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgwGSe/5NFMpi+\nAovyOL0g5MUrqkl/0rjFM70QKxN9Nf+VisUDAeZW8g+LgUPZd+jvaWehQub/hjkj\n6ksghWo7WgECxdpLCqmtG+fa20daV0ZQ6zPK3+ytP7++W8bwE2hKGfJzKqLvIz26\npRs3rZMHqQ7KtSdYLRwMO4D3JS1QcL1EgcPmLs6zDCC7Nny8h70iAOUgwDeeZAa1\noDsM203U1l2r3VScB8hBzLgAnQieqXeZkjm2Ci0Eu3bBisJO6Johz1SA7BoFssYd\nxmRmmr3ZaZgg25kUOKKPSwjFRfxBbzN3t7Z9+LMtaSI7+wGX7frvRUQvNPdZ415R\nrzYP1z7nAgMBAAECggEARu9iMq6ugBYWkE4EdnhC9RlPQ9dUqFPNPmx0fSBjX88F\nsmCgirD0TrfKgTjUvdPzQHDvpL2VY8usyDGf8Y06OK5RCFuC6NFeOUVH+dLgo9pM\n1qhNafgf3pRyw7V6xfYSIeUrmP65eymPx5Np0jpl3/KTORZQ6ysdoZy8OQTSVwMO\nkw0+MHzX4B7nRwz+zSDgmwaYySWBVndc1PX1j1tvi3DdBRGtY42JGthiWwYBuTQC\nYUOo6TUPH+m2cScvb56p2wR+eEhlSoyda12yMZwtbpi4dQFC3Q4o82FS4WWu2m5R\nNt8GYFbrTyS0wE0YD+i4cXi14POiialCe92k2wuWFQKBgQD8rXhy/ENOJ8pQJktP\nmGPgXiJuCM663m8Jzq1LYU4/XfnYqHE4SnizAqdSWAMWOESOjiFSaHITMxMK018i\nlOzr1IsyDYHqR7GDMOd56G1vnBgXjkdLiQlKBYmd2c9NrtMkYxvKs9GNvncAtDD5\n4RZmMmdLXrtJXuA2SNS6WnHVuwKBgQDjtOvoHqlgak0qSvEB6KglEcBUujaN2SP4\npZd5Z0ILVBKLCqEOtTb6waSmIOVJBq85Nzpx85lyHm5KlwbHOm43/lAKdKqeAR+X\nGPdtPvW3Z5zmEZuv45O38PPw72FEgva1Sx/NFEpJh0cVgbOvqxl+UlqOB1PR/gKK\nvbuzSenyxQKBgD0eCIBnnDAPV9RDLvw1tBLVMibDYp24p8sLfsc45iBVrtVFCP3A\npalG/wnf1/9L5OlGX7D7KnySYgzAS8allxkD9BdLRR1R8hH1hkfqfG3+p6Uq+PvA\nTcrlw/+2a3oyy0eF4XcKP6m1ZDt7Wk1WsIBPuMR2SX7ZwAnhW/MnZVl5AoGAbfpC\n+lBc1CFjdarObnKVS5ogP4vUr3wRwJUR7OPvZRNNBXSzxyvFCyWdxVMcCsI8vTCs\nfL7//Lsv37zD3FOfSlH9DJ++jCPUwyCe2FfRS6yyffhBLpmHDg9FcrfbTcDHMVbA\nXEeRfaPltEB5rb3AyV8zN2fYlxLM3X+3+WcYpFUCgYEAqLIyYaSx3+s6UjJw010s\nyk2MMYwl/81j0JhgVWYA0CUlBiXdIL9PC5LzSZjs63GiHDjmZTggAVIT20AAgXHQ\n6kruBWW16eJWbaugJoBCd/i2+06OtZfLilsNO4ifS07X838OkbjhSsiTPV8dOeMc\nml8ZFpjq62arBW1mO4SrrDw=\n-----END PRIVATE KEY-----\n',
  client_email: 'firebase-adminsdk-fn9nc@social-crash.iam.gserviceaccount.com',
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
