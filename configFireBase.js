import admin from 'firebase-admin';
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



export { storage, admin, titles, getArticleContent };
