import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Las películas más esperadas del verano 2024",
    "Cómo los servicios de streaming están cambiando la industria del cine",
    "Los secretos detrás del éxito de las series de televisión más populares",
    "La evolución de los videojuegos en la última década",
    "Entrevista exclusiva con la estrella emergente del pop",
    "Cómo los festivales de música están adaptándose a la era digital",
    "Las mejores bandas sonoras de películas recientes",
    "El impacto de las redes sociales en la fama de los artistas",
    "Documentales imprescindibles para este año",
    "Los mejores videojuegos de realidad virtual en 2024",
    "El resurgimiento de los vinilos: tendencias y recomendaciones",
    "Cómo los podcasts están revolucionando el entretenimiento",
    "Películas de culto que debes ver al menos una vez",
    "El impacto de los efectos especiales en el cine moderno",
    "Las series de televisión que rompieron récords de audiencia",
    "Cómo las celebridades están utilizando sus plataformas para el activismo",
    "Los mejores conciertos en vivo del año",
    "El fenómeno de los remakes y reboots en Hollywood",
    "Cine independiente: joyas ocultas que debes descubrir",
    "La influencia del anime en la cultura occidental",
    "El papel de la música en la mejora del bienestar emocional",
    "Las tendencias de moda que están dominando la industria del entretenimiento",
    "Cómo los actores se preparan para sus roles más desafiantes",
    "La evolución de los programas de concursos en la televisión",
    "Películas basadas en hechos reales que te impactarán",
    "Los mejores libros que serán adaptados a la pantalla grande",
    "El auge de las series documentales en plataformas de streaming",
    "Cómo los musicales están conquistando nuevas audiencias",
    "Las claves del éxito de las películas de superhéroes",
    "El futuro de los parques temáticos en la era digital"
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