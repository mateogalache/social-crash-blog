import { temasDeportes2 } from '../dev/deportes2.js';
import { temasEducacion2 } from '../dev/educacion2.js';
import { temasEntretenimiento2 } from '../dev/entretenimiento2.js';
import { temasFinanzas2 } from '../dev/finanzas2.js';
import { temasModa2 } from '../dev/moda2.js';
import { temasNutricion2 } from '../dev/nutricion2.js';
import { temasMotor2} from '../dev/motor2.js';
import { temasPolitica2 } from '../dev/politica2.js';
import { temasSalud2 } from '../dev/salud2.js';
import { temasTecnologia2 } from '../dev/tecnologia2.js';
import { temasViajes2 } from '../dev/viajes2.js';
import { temasGaming2 } from '../dev/gaming2.js';
import { generateAndUploadContent } from './generateArticles.js';

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  const newTemas = [
    temasDeportes2[day-1],
    temasEducacion2[day-1],
    temasEntretenimiento2[day-1],
    temasFinanzas2[day-1],
    temasGaming2[day-1],
    temasModa2[day-1],
    temasMotor2[day-1],
    temasNutricion2[day-1],
    temasPolitica2[day-1],
    temasSalud2[day-1],
    temasTecnologia2[day-1],
    temasViajes2[day-1]
  ]
  const categories = [
    "deportes",
    "educacion",
    "entretenimiento",
    "finanzas",
    "gaming",
    "moda",
    "motor",
    "nutricion",
    "politica",
    "salud",
    "tecnologia",
    "terror",
    "viajes"
  ]
  try {
    generateAndUploadContent(newTemas,categories)
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}