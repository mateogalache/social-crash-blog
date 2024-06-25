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

async function listArticleTitles($category) {
  const titles = [];
  
      const [files] = await storage.bucket().getFiles({ prefix: `articulos/${category}/` });
    
      for (const file of files) {
        const fileName = file.name.replace(`articulos/${category}/`, '').replace('.html', '');
        titles.push(fileName);
      }
    

  return titles;
}

const titlesEducacion = listArticleTitles('educacion');

async function getArticleContent(id,category) {
  const file = storage.bucket().file(`articulos/${category}/${id}.html`);
  const [content] = await file.download();
  return content.toString('utf8');
}


async function getArticleTitle(id,category) {
  const articleContent = await getArticleContent(id,category);
  const titleMatch = articleContent.match(/<h1 class='text-2xl text-center'><strong>(.*?)<\/strong><\/h1>/);
  const articleTitle = titleMatch ? titleMatch[1] : 'Título no encontrado';

  return articleTitle;
}

async function getArticleImage(id,category) {
  try {
    const file = storage.bucket().file(`images/${category}/${id}.png`);
    const [content] = await file.download();
    const base64Image = content.toString('base64');
    return `data:image/png;base64,${base64Image}`;
  } catch (error) {
    console.error(`Error fetching image for ${id}:`, error);
    throw error; // O maneja el error de otra manera, si prefieres
  }
}


async function saveTitlesToFile() {
  
    const titles = await listArticleTitles();
    const jsonContent = JSON.stringify(titles, null, 2);
    await fs.writeFile('nameArticles.json', jsonContent);

  
}


export { storage, admin, listArticleTitles, getArticleContent,saveTitlesToFile,getArticleImage,getArticleTitle,titlesEducacion };

