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

export default async function handler () { 
  try {
    await generateDeportes();
    await generateEducacion();
    await generateEntretenimiento();
    await generateFinanzas();
    await generateModa();
    await generateMotor();
    await generateNutricion();
    await generatePolitica();
    await generateTerror();
    await generateViajes();
    await generateSalud();
    await generateTecnologia();
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}