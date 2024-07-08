import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "El impacto de las políticas de privacidad en la era digital",
  "Cómo las elecciones afectan las relaciones internacionales",
  "El papel de las mujeres en la política global",
  "Las estrategias de campaña más efectivas en 2024",
  "El impacto de las políticas migratorias en la economía",
  "Cómo las políticas energéticas están cambiando el mundo",
  "El papel de los jóvenes en la política actual",
  "Las consecuencias de la polarización política",
  "El impacto de las políticas de salud pública en la sociedad",
  "Cómo la tecnología está transformando las elecciones",
  "Las relaciones diplomáticas en América Latina",
  "El impacto de las sanciones económicas en la política internacional",
  "Cómo las políticas educativas están evolucionando",
  "El papel de los sindicatos en la política moderna",
  "Las estrategias de política exterior en África",
  "El impacto de las políticas fiscales en la economía global",
  "Cómo las políticas ambientales están afectando a la industria",
  "El papel de las ONG en la política internacional",
  "Las relaciones entre China y Europa en 2024",
  "El impacto de la desinformación en la política",
  "Cómo las políticas de vivienda están cambiando las ciudades",
  "El papel de los movimientos sociales en la política",
  "Las políticas de ciberseguridad en un mundo conectado",
  "El impacto de la política monetaria en la economía",
  "Cómo las políticas de transporte están afectando la movilidad urbana",
  "Las relaciones diplomáticas en el Medio Oriente",
  "El papel de la educación política en la democracia",
  "Cómo las políticas laborales están evolucionando",
  "El impacto de la política en la innovación tecnológica",
  "Las estrategias de política exterior en Asia",
  "El papel de la justicia social en la política actual"
]

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"politica");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}