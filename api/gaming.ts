import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Los videojuegos más esperados del año 2024",
    "Cómo mejorar tus habilidades en los juegos de disparos en primera persona",
    "Estrategias avanzadas para triunfar en juegos de rol multijugador masivo",
    "La evolución de los gráficos en los videojuegos modernos",
    "Los mejores periféricos para una experiencia de juego inmersiva",
    "Cómo configurar tu PC para un rendimiento óptimo en juegos",
    "El impacto de la realidad virtual en la industria del gaming",
    "Estrategias para ganar en juegos de estrategia en tiempo real",
    "Los videojuegos indie que no puedes perderte este año",
    "El auge de los eSports y cómo convertirte en un jugador profesional",
    "Consejos para crear contenido de gaming en YouTube y Twitch",
    "La historia detrás de las franquicias de videojuegos más exitosas",
    "Cómo los videojuegos están influyendo en la cultura pop",
    "Los mejores juegos de aventura para consolas de nueva generación",
    "Estrategias para mejorar en juegos de combate",
    "El impacto de la inteligencia artificial en el desarrollo de videojuegos",
    "Los juegos móviles más adictivos de 2024",
    "Cómo elegir el mejor monitor para gaming",
    "La importancia del sonido en los videojuegos: mejores auriculares",
    "Los mejores mods para mejorar tu experiencia de juego",
    "Consejos para evitar el cansancio visual durante largas sesiones de juego",
    "El papel de la narrativa en los videojuegos",
    "Cómo los desarrolladores están abordando la accesibilidad en los juegos",
    "Estrategias para dominar juegos de cartas coleccionables",
    "Los mejores videojuegos para jugar en familia",
    "La evolución del género de supervivencia en los videojuegos",
    "Cómo los videojuegos están siendo utilizados en la educación",
    "Los juegos de deportes más realistas del mercado",
    "Consejos para optimizar el espacio de almacenamiento de tu consola",
    "El futuro de la realidad aumentada en el gaming"
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