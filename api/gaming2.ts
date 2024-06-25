import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Cómo los videojuegos están promoviendo la inclusión y diversidad",
    "Los mejores juegos cooperativos para jugar con amigos",
    "El impacto de la retrocompatibilidad en la industria del gaming",
    "Consejos para construir tu propio PC gamer",
    "Los juegos más innovadores en el género de puzles",
    "Cómo gestionar tu tiempo entre trabajo y gaming",
    "El papel de las bandas sonoras en la experiencia de juego",
    "Los juegos de simulación más populares del año",
    "Estrategias para dominar en los battle royale",
    "La evolución de los juegos de mundo abierto",
    "Cómo los juegos están abordando temas sociales y políticos",
    "Los mejores juegos de terror para una experiencia espeluznante",
    "Consejos para mejorar tu conexión a internet para el gaming en línea",
    "La importancia de la retroalimentación de los jugadores en el desarrollo de juegos",
    "Los juegos de carreras más emocionantes del mercado",
    "Estrategias para ganar en juegos de gestión y construcción",
    "El impacto de los juegos en la salud mental y cómo jugar de manera responsable",
    "Cómo los juegos están integrando tecnologías de aprendizaje automático",
    "Los mejores juegos de plataformas para todas las edades",
    "Cómo los videojuegos están influyendo en la moda y el diseño",
    "Estrategias para monetizar tu canal de gaming",
    "El futuro de los videojuegos en la nube",
    "Los mejores juegos de rol para consolas y PC",
    "Cómo los desarrolladores están utilizando el feedback de los jugadores",
    "El impacto de los lanzamientos exclusivos en las guerras de consolas",
    "Consejos para mantener tus dispositivos de gaming en óptimas condiciones",
    "Cómo la narrativa interactiva está cambiando la forma de contar historias en los videojuegos",
    "Los juegos más destacados en el género de ciencia ficción",
    "El papel de los eventos y convenciones de gaming en la industria",
    "Cómo los videojuegos están inspirando otras formas de arte"
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