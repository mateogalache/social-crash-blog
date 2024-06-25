import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Cómo los influencers están cambiando el marketing en el entretenimiento",
    "Las estrellas de cine más influyentes del momento",
    "La importancia de la diversidad en la industria del entretenimiento",
    "Películas animadas que han marcado generaciones",
    "Los mejores festivales de cine del mundo y por qué asistir",
    "El impacto de la inteligencia artificial en la producción de contenido",
    "Cómo los espectáculos de Broadway se mantienen relevantes",
    "El regreso de las bandas clásicas: giras y nuevos álbumes",
    "Las mejores plataformas de streaming para amantes del cine",
    "Cómo el cine de autor está encontrando su lugar en la era digital",
    "La influencia de los críticos en el éxito de una película",
    "El papel de los premios de la industria en la carrera de los artistas",
    "Los documentales musicales que no te puedes perder",
    "El boom de las biopics: historias detrás de grandes personajes",
    "Cómo los festivales de cine apoyan a los nuevos talentos",
    "El impacto de la globalización en la música pop",
    "Las series de ciencia ficción que están marcando tendencia",
    "Los mejores videojuegos de aventuras gráficas",
    "Cómo las plataformas de streaming están impulsando el cine internacional",
    "La evolución de los talk shows en la televisión moderna",
    "Películas de terror que redefinen el género",
    "El papel de la nostalgia en el éxito de las franquicias de entretenimiento",
    "Los conciertos virtuales: una nueva forma de disfrutar la música en vivo",
    "Las claves para un guion de éxito en Hollywood",
    "Cómo los festivales de música están apoyando causas sociales",
    "El auge de los reality shows y su impacto cultural",
    "La evolución de los efectos de sonido en el cine",
    "El papel de las bandas sonoras en el éxito de una película",
    "Cómo los estudios de cine están adaptándose a la sostenibilidad",
    "Las tendencias emergentes en el entretenimiento digital"
]

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"entretenimiento");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}