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
    temasFinanzas[day-1],
    temasGaming[day-1]
  ]
  const newTemas2 = [  
    temasModa[day-1],
    temasMotor[day-1],
    temasNutricion[day-1],
    temasPolitica[day-1],
    temasSalud[day-1]
  ]
  const newTemas3 = [ 
    temasTecnologia[day-1],
    temasTerror[day-1],
    temasViajes[day-1]
  ]
  const categories = [
    "deportes",
    "educacion",
    "entretenimiento",
    "finanzas",
    "gaming"
  ]
  const categories2 = [
    "moda",
    "motor",
    "nutricion",
    "politica",
    "salud"
  ]
  const categories3 = [
    "tecnologia",
    "terror",
    "viajes"
  ]
  function delay(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  try {
    generateAndUploadContent(newTemas,categories);
    await delay(90000);
    generateAndUploadContent(newTemas2,categories2);
    await delay(90000);
    generateAndUploadContent(newTemas3,categories3);
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}