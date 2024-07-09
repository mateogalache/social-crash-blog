import { temasModa } from '../dev/moda.js';
import { temasViajes } from '../dev/viajes.js';
import { temasMotor } from '../dev/motor.js';
import { temasPolitica } from '../dev/politica.js';
import { temasSalud } from '../dev/salud.js';
import { generateAndUploadContent } from './generateArticles.js';

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  function getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }
  const newTemas2 = [  
    temasModa[day-1],
    temasMotor[day-1],
    temasViajes[day-1],
    temasPolitica[day-1],
    temasSalud[day-1]
  ]
  const categories2 = [
    "moda",
    "motor",
    "nutricion",
    "politica",
    "salud",
  ]
  const newTemas3 = [  
    temasModa[day-1],
    temasMotor[day-1],
    temasViajes[day-1],
    temasPolitica[day-1],
    temasSalud[day-1]
  ]
  const categories3 = [
    "terror",
    "nutricion",
    "salud",
    "politica",
    "tecnologia",
  ]
  let newTemas,categories;
 if(getRandomBoolean())
  {
    newTemas = newTemas2;
    categories = categories2;
  } else
  {
    newTemas = newTemas3;
    categories = categories3;
  }

  try {
    generateAndUploadContent(newTemas,categories)
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}