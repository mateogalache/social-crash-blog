import admin from 'firebase-admin';
import fs from 'fs/promises';  // Usa el módulo fs de Node.js para trabajar con el sistema de archivos
import keysFireBase from './serviceAccountKey.json' assert { type: 'json' };

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

async function saveTitlesToFile() {
  const titles = await listArticleTitles();
  // Asegúrate de que el archivo no tenga comillas dobles al principio
  const jsonContent = JSON.stringify(titles, null, 2);
  await fs.writeFile('nameArticles.json', jsonContent);
}

// Genera el archivo nameArticles.json al iniciar
saveTitlesToFile().catch(console.error);

export { storage, admin, titles, getArticleContent, saveTitlesToFile };
