import { generateAndUploadContent } from './generateArticles.js';


const temas =  [
  "Los videojuegos más esperados del otoño 2024",
  "Cómo mejorar tus habilidades en juegos de estrategia",
  "Las mejores consolas de juegos del año",
  "El impacto de la realidad aumentada en el gaming",
  "Cómo configurar tu PC para juegos de alto rendimiento",
  "Las mejores estrategias para ganar en juegos de cartas",
  "Cómo los juegos indie están cambiando la industria",
  "Los mejores accesorios para gamers",
  "El impacto de los eSports en la cultura juvenil",
  "Cómo crear contenido de gaming en TikTok",
  "Las mejores comunidades de gamers en línea",
  "Cómo elegir el mejor monitor para gaming",
  "Las tendencias en los videojuegos de realidad virtual",
  "Cómo los juegos están abordando temas sociales",
  "Las mejores series de videojuegos de todos los tiempos",
  "El impacto de los juegos móviles en la industria",
  "Cómo optimizar tu conexión a internet para el gaming",
  "Las mejores plataformas de streaming para gamers",
  "Cómo los juegos están integrando la inteligencia artificial",
  "Las mejores técnicas para el diseño de videojuegos",
  "Cómo ganar dinero jugando videojuegos",
  "Los mejores juegos de aventura para consolas",
  "El impacto de la tecnología en los videojuegos",
  "Cómo los juegos están influyendo en la educación",
  "Las mejores estrategias para ganar en juegos de rol",
  "Cómo los juegos están promoviendo la inclusión y diversidad",
  "Las mejores series de televisión basadas en videojuegos",
  "El impacto de los juegos en la salud mental",
  "Cómo los desarrolladores están utilizando el feedback de los jugadores",
  "Las mejores franquicias de videojuegos de la década",
  "El futuro de los juegos de mundo abierto"
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