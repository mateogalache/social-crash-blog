import { generateDeportes2 } from '../dev/deportes2.js';
import { generateEducacion2 } from '../dev/educacion2.js';
import { generateEntretenimiento2 } from '../dev/entretenimiento2.js';
import { generateFinanzas2 } from '../dev/finanzas2.js';
import { generateModa2 } from '../dev/moda2.js';
import { generateNutricion2 } from '../dev/nutricion2.js';
import { generateMotor2} from '../dev/motor2.js';
import { generatePolitica2 } from '../dev/politica2.js';
import { generateSalud2 } from '../dev/salud2.js';
import { generateTecnologia2 } from '../dev/tecnologia2.js';
import { generateViajes2 } from '../dev/viajes2.js';
import { generateGaming2 } from '../dev/gaming2.js';

export default async function handler () { 
  try {
    generateDeportes2();
    generateEducacion2();
    generateEntretenimiento2();
    generateFinanzas2();
    generateModa2();
    generateMotor2();
    generateNutricion2();
    generatePolitica2();
    generateViajes2();
    generateSalud2();
    generateTecnologia2();
    generateGaming2();
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}