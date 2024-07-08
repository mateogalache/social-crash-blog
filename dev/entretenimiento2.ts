import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "Las mejores comedias románticas del año",
  "Cómo los festivales de cine están descubriendo nuevos talentos",
  "Las series más adictivas para hacer maratones",
  "El impacto de los remakes en la industria del entretenimiento",
  "Las mejores películas de aventuras de 2024",
  "Cómo los juegos de mesa están volviendo a ser populares",
  "Las estrellas de la música que están revolucionando el pop",
  "Las películas de animación más esperadas de 2024",
  "Cómo los festivales de música están adaptándose a la era digital",
  "Las mejores películas dramáticas del año",
  "El impacto de los reality shows en la televisión",
  "Cómo los videojuegos están influyendo en la moda",
  "Las mejores bandas de rock de la actualidad",
  "Las películas de fantasía más esperadas de 2024",
  "Cómo los conciertos en vivo están cambiando la experiencia musical",
  "Las mejores series de crimen del año",
  "El impacto de las redes sociales en la fama de los artistas",
  "Cómo los documentales están educando a las nuevas generaciones",
  "Las mejores películas de superhéroes de 2024",
  "Cómo los eventos en línea están cambiando el entretenimiento",
  "Las estrellas de la televisión que están conquistando Hollywood",
  "Las películas más inspiradoras del año",
  "Cómo los efectos visuales están transformando el cine",
  "Las mejores películas de misterio de 2024",
  "El impacto de la música en la cultura juvenil",
  "Las películas de acción más esperadas del año",
  "Cómo los festivales de cine están promoviendo la diversidad",
  "Las mejores series de ciencia ficción de 2024",
  "El auge de las plataformas de streaming de música",
  "Las películas de época más esperadas de este año",
  "Cómo los eventos de eSports están ganando popularidad"
]

export async function generateEntretenimiento2 () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"entretenimiento");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}