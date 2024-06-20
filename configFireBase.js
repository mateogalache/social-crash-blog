import admin from 'firebase-admin';
import keysFireBase from './serviceAccountKey.json' assert { type: 'json' };
import fs from 'fs/promises'; 

const serviceAccount = {
  type: keysFireBase.type,
  project_id: keysFireBase.project_id,
  private_key_id: keysFireBase.private_key_id,
  private_key: keysFireBase.private_key,
  client_email: keysFireBase.client_email,
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "social-crash.appspot.com",
  });
}

const storage = admin.storage();

async function listArticleTitles() {
  const [files] = await storage.bucket().getFiles({ prefix: 'articulos/' });
  const titles = [];

  for (const file of files) {
    const fileName = file.name.replace('articulos/', '').replace('.html', '');
    titles.push(fileName);
  }

  return titles;
}

const titles = await listArticleTitles();

async function getArticleContent(id) {
  const file = storage.bucket().file(`articulos/${id}.html`);
  const [content] = await file.download();
  return content.toString('utf8');
}
async function getArticleImage(id) {
  try {
    const file = storage.bucket().file(`images/${id}.png`);
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



export { storage, admin, listArticleTitles, getArticleContent,saveTitlesToFile,titles,getArticleImage };
