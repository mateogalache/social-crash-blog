import { generateAndUploadContent2 } from './generateArticles.js';

export default async function handler () {
  try {
    await generateAndUploadContent2();
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}
