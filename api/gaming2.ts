import { generateAndUploadContent } from './generateArticles.js';


const temas = [
  "Cómo los juegos están abordando el cambio climático",
  "Las mejores técnicas para el desarrollo de juegos móviles",
  "El impacto de los eventos de gaming en la comunidad",
  "Cómo los juegos están influyendo en la moda",
  "Las mejores estrategias para ganar en juegos de simulación",
  "Cómo los juegos están utilizando la realidad virtual",
  "El impacto de los juegos en la economía",
  "Cómo los juegos están cambiando la narrativa interactiva",
  "Las mejores técnicas para el diseño de personajes en videojuegos",
  "Cómo los juegos están integrando el aprendizaje automático",
  "El impacto de los juegos en la cultura pop",
  "Cómo los juegos están abordando la salud mental",
  "Las mejores estrategias para ganar en juegos de deportes",
  "Cómo los juegos están utilizando la inteligencia artificial",
  "El impacto de los juegos en la educación",
  "Cómo los juegos están promoviendo la sostenibilidad",
  "Las mejores técnicas para el desarrollo de juegos indie",
  "El impacto de los juegos en la tecnología",
  "Cómo los juegos están influyendo en la música",
  "Las mejores estrategias para ganar en juegos de estrategia",
  "Cómo los juegos están abordando temas de igualdad de género",
  "El impacto de los juegos en la industria del entretenimiento",
  "Cómo los juegos están utilizando la realidad aumentada",
  "Las mejores técnicas para el desarrollo de juegos de realidad virtual",
  "El impacto de los juegos en la economía global",
  "Cómo los juegos están cambiando la narrativa en los medios",
  "Las mejores estrategias para ganar en juegos de combate",
  "Cómo los juegos están abordando el cambio social",
  "El impacto de los juegos en la innovación tecnológica",
  "Cómo los juegos están utilizando la tecnología blockchain",
  "Las mejores técnicas para el desarrollo de juegos de aventura"
]

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"gaming");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}