import { temasDeportes } from '../dev/deportes.js';
import { temasEducacion } from '../dev/educacion.js';
import { temasEntretenimiento } from '../dev/entretenimiento.js';
import { temasFinanzas } from '../dev/finanzas.js';
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

  const categories = [
    "deportes",
    "educacion",
    "entretenimiento",
    "finanzas",
    "gaming"
  ]
  try {
    generateAndUploadContent(newTemas,categories);
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}