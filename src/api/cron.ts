import { generateAndUploadContent } from 'generateArticles';

export default async function handler() {
  try {
    await generateAndUploadContent();
    //res.status(200).json({ message: 'Artículo e imagen generados y subidos a Firebase Storage.' });
  } catch (error) {
    console.error(error);
    //res.status(500).json({ error: 'Error al generar y subir el contenido' });
  }
}
