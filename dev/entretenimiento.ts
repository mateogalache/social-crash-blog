import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "Las series de televisión más esperadas de 2024",
  "Cómo los servicios de streaming están cambiando la televisión",
  "Las mejores películas de acción del año",
  "Cómo los festivales de cine están evolucionando",
  "Las estrellas emergentes de Hollywood",
  "Los mejores documentales de 2024",
  "Cómo la realidad virtual está cambiando el entretenimiento",
  "Las bandas más influyentes de la década",
  "Cómo los videojuegos están impactando la cultura pop",
  "Las mejores películas de comedia de 2024",
  "El auge de los podcasts y cómo encontrar los mejores",
  "Las mejores series documentales del año",
  "Cómo los influencers están cambiando la industria musical",
  "Las mejores películas de animación para toda la familia",
  "El impacto de la inteligencia artificial en la producción de películas",
  "Las bandas sonoras más icónicas de 2024",
  "Cómo los conciertos virtuales están revolucionando la música",
  "Las mejores obras de teatro que debes ver este año",
  "El impacto de las plataformas de streaming en el cine independiente",
  "Las mejores películas de ciencia ficción de 2024",
  "Cómo los festivales de música están apoyando causas sociales",
  "Las estrellas del cine que también son directores",
  "Las mejores películas románticas para una noche de cine",
  "Cómo la tecnología está mejorando la experiencia de los conciertos",
  "Las películas más taquilleras del año",
  "El auge de las series de televisión basadas en libros",
  "Cómo los efectos especiales están cambiando el cine",
  "Las mejores películas de terror de 2024",
  "El impacto de las plataformas digitales en la industria musical",
  "Las películas biográficas más esperadas de este año",
  "Cómo los estudios de cine están adoptando la sostenibilidad"
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