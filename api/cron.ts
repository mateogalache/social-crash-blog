import { generateAndUploadContent } from './generateArticles';

export const handler = async () => {
  try {
    await generateAndUploadContent();
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}
