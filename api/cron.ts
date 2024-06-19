import { saveTitlesToFile } from '../configFireBase.js';

export default async function handler () {
  try {
    await saveTitlesToFile();
    console.log('Artículo e imagen generados y subidos a json.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}
