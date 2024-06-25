import { generateAndUploadContent } from './generateArticles.js';


const temas = [
  "Preparativos y expectativas para los Juegos Olímpicos de París 2024",
  "Jugadores y torneos más destacados en el mundo de los eSports",
  "El final de la rivalidad entre Federer y Nadal",
  "Nuevas promesas en la selección brasileña de fútbol",
  "Movimientos de mercado en la Serie A italiana",
  "Avances en medicina deportiva y recuperación de atletas",
  "El crecimiento del ciclismo femenino a nivel mundial",
  "Importancia de la nutrición en el rendimiento de los deportistas",
  "El papel fundamental del entrenador en el éxito deportivo",
  "Favoritos y sorpresas en la Copa América 2024",
  "Creciente popularidad de los deportes extremos",
  "Mitos y realidades del entrenamiento de resistencia",
  "El impacto de los videojuegos en el desarrollo de habilidades motoras",
  "Psicología deportiva: técnicas para mejorar el rendimiento",
  "El futuro de la Fórmula 1: tendencias y predicciones",
  "La historia detrás de las rivalidades más grandes del fútbol",
  "Entrenamientos de alta intensidad: beneficios y riesgos",
  "Cómo la inteligencia artificial está transformando el deporte",
  "Estrategias de marketing en los equipos deportivos",
  "El auge de los deportes de aventura",
  "La importancia del descanso y la recuperación en el deporte",
  "Técnicas de entrenamiento mental para atletas de élite",
  "El rol del fisioterapeuta en la prevención de lesiones",
  "El desarrollo del fútbol femenino a nivel mundial",
  "La evolución de las zapatillas deportivas: tecnología y diseño",
  "Cómo los deportes pueden fomentar la inclusión social",
  "La relación entre el deporte y la sostenibilidad ambiental",
  "El impacto de los patrocinios en la carrera de los atletas",
  "Cómo crear un plan de entrenamiento personalizado",
  "La influencia de los grandes eventos deportivos en la economía global"
]

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"deportes");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}