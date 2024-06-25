import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Las tendencias de moda más destacadas para el verano 2024",
    "Cómo crear un armario cápsula: prendas esenciales",
    "Los colores que dominarán la moda este año",
    "Consejos para combinar estampados de manera efectiva",
    "El regreso de la moda retro: estilos de los 90",
    "Cómo elegir el traje perfecto para cualquier ocasión",
    "Los accesorios imprescindibles para esta temporada",
    "La evolución de la moda sostenible",
    "Consejos para encontrar tu estilo personal",
    "Los mejores looks de las alfombras rojas recientes",
    "Cómo vestir de manera elegante en el trabajo",
    "La influencia de las celebridades en las tendencias de moda",
    "Cómo elegir el mejor par de jeans según tu tipo de cuerpo",
    "Las colaboraciones más esperadas entre diseñadores y marcas",
    "Consejos para comprar ropa de calidad a precios asequibles",
    "El impacto de la tecnología en la industria de la moda",
    "Cómo cuidar y mantener tus prendas favoritas",
    "Los mejores trucos de estilo para personas de baja estatura",
    "La importancia de los básicos en cualquier guardarropa",
    "Cómo incorporar la moda ética en tu vida diaria",
    "Las tendencias de calzado para el 2024",
    "El auge de la moda athleisure: comodidad y estilo",
    "Consejos para vestirse para una entrevista de trabajo",
    "La historia y evolución de las marcas de lujo",
    "Cómo llevar ropa deportiva fuera del gimnasio",
    "Los mejores vestidos para eventos formales",
    "Cómo mezclar y combinar diferentes texturas",
    "La influencia de las redes sociales en la moda actual",
    "Consejos para vestirse en climas cálidos",
    "Los mejores estilos de gafas de sol para este verano"
]

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"moda");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}