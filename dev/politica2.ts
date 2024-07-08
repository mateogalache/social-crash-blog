import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "Cómo las políticas agrícolas están afectando la producción de alimentos",
  "El impacto de las políticas de defensa en la seguridad global",
  "Las relaciones diplomáticas entre Estados Unidos y Rusia",
  "Cómo las políticas de salud mental están evolucionando",
  "El papel de la transparencia en la política",
  "Las estrategias de política exterior en América del Norte",
  "El impacto de las políticas de igualdad de género",
  "Cómo las políticas de privacidad están afectando a las empresas",
  "El papel de la ética en la política moderna",
  "Las políticas de cambio climático y su impacto global",
  "Cómo las políticas de turismo están afectando las economías locales",
  "El impacto de las políticas de telecomunicaciones en la sociedad",
  "Las relaciones diplomáticas entre Europa y África",
  "Cómo las políticas de inmigración están afectando a las familias",
  "El papel de la cooperación internacional en la política",
  "Las políticas de protección de datos en la era digital",
  "Cómo las políticas de derechos humanos están evolucionando",
  "El impacto de las políticas de urbanización en las ciudades",
  "Las relaciones diplomáticas entre Asia y América Latina",
  "Cómo las políticas de transporte están afectando el medio ambiente",
  "El papel de la justicia social en la política global",
  "Las estrategias de política exterior en Europa del Este",
  "El impacto de las políticas de innovación tecnológica",
  "Cómo las políticas de energía están afectando el cambio climático",
  "El papel de las políticas educativas en la inclusión social",
  "Las relaciones diplomáticas entre Medio Oriente y Europa",
  "Cómo las políticas de salud pública están evolucionando",
  "El impacto de las políticas de privacidad en la sociedad",
  "Las estrategias de política exterior en Europa Occidental",
  "El papel de la equidad en la política moderna",
  "Cómo las políticas de medio ambiente están afectando a las empresas"
]

export async function generatePolitica2 () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"politica");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}