import { generateDeportes } from '../dev/deportes.js';
import { generateEducacion } from '../dev/educacion.js';
import { generateEntretenimiento } from '../dev/entretenimiento.js';
import { generateFinanzas } from '../dev/finanzas.js';
import { generateModa } from '../dev/moda.js';
import { generateNutricion } from '../dev/nutricion.js';
import { generateMotor } from '../dev/motor.js';
import { generatePolitica } from '../dev/politica.js';
import { generateSalud } from '../dev/salud.js';
import { generateTecnologia } from '../dev/tecnologia.js';
import { generateTerror } from '../dev/terror.js';
import { generateViajes } from '../dev/viajes.js';
import { generateGaming } from '../dev/gaming.js';

export default async function handler () { 
  try {
    generateDeportes();
    generateEducacion();
    generateEntretenimiento();
    generateFinanzas();
    generateModa();
    generateMotor();
    generateNutricion();
    generatePolitica();
    generateTerror();
    generateViajes();
    generateSalud();
    generateTecnologia();
    generateGaming();
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}