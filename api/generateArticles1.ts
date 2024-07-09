import { temasDeportes } from '../dev/deportes.js';
import { temasEducacion } from '../dev/educacion.js';
import { temasEntretenimiento } from '../dev/entretenimiento.js';
import { temasFinanzas } from '../dev/finanzas.js';
import { temasModa } from '../dev/moda.js';
import { temasNutricion } from '../dev/nutricion.js';
import { temasMotor } from '../dev/motor.js';
import { temasPolitica } from '../dev/politica.js';
import { temasSalud } from '../dev/salud.js';
import { temasTecnologia } from '../dev/tecnologia.js';
import { temasTerror } from '../dev/terror.js';
import { temasViajes } from '../dev/viajes.js';
import { temasGaming } from '../dev/gaming.js';
import { generateAndUploadContent } from './generateArticles.js';

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  const newTemas = [
    temasDeportes[day-1],
    temasEducacion[day-1],
    temasEntretenimiento[day-1],
    
  ]
  const categories = [
    "deportes",
    "educacion",
    "entretenimiento",

  ]
  try {
    generateAndUploadContent(newTemas,categories)
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}