import { temasModa } from '../dev/moda.js';
import { temasNutricion } from '../dev/nutricion.js';
import { temasMotor } from '../dev/motor.js';
import { temasPolitica } from '../dev/politica.js';
import { temasSalud } from '../dev/salud.js';
import { generateAndUploadContent } from './generateArticles.js';

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  const newTemas2 = [  
    temasModa[day-1],
    temasMotor[day-1],
    temasNutricion[day-1],
    temasPolitica[day-1],
    temasSalud[day-1]
  ]
  const categories = [
    "moda",
    "motor",
    "nutricion",
    "politica",
    "salud",
  ]
  try {
    generateAndUploadContent(newTemas2,categories)
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}