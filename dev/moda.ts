import { generateAndUploadContent } from '../api/generateArticles.js';


const temas =  [
  "Las tendencias de moda para el otoño 2024",
  "Cómo combinar colores de manera efectiva",
  "El regreso de los estilos de los 80",
  "Cómo elegir el mejor abrigo para el invierno",
  "Las mejores marcas de moda sostenible",
  "Cómo encontrar tu estilo personal",
  "Las tendencias de maquillaje para este año",
  "Cómo vestir para una entrevista de trabajo",
  "Las mejores tiendas vintage del mundo",
  "Cómo cuidar y mantener tus zapatos de cuero",
  "El impacto de las redes sociales en la moda",
  "Las colaboraciones más esperadas entre diseñadores y celebridades",
  "Cómo llevar la moda athleisure con estilo",
  "Los mejores accesorios para realzar cualquier look",
  "Cómo elegir el mejor traje para cada ocasión",
  "Las tendencias de moda masculina para 2024",
  "Cómo incorporar piezas de diseñador en tu guardarropa",
  "Las mejores prácticas para comprar ropa en línea",
  "Cómo crear un armario cápsula de verano",
  "El impacto de la moda rápida en el medio ambiente",
  "Cómo vestirse para una boda de verano",
  "Las mejores prendas de denim para esta temporada",
  "Cómo encontrar el vestido perfecto para una ocasión especial",
  "Las tendencias de joyería para 2024",
  "Cómo llevar ropa deportiva fuera del gimnasio",
  "Las mejores marcas de moda ética que debes conocer",
  "Cómo combinar diferentes patrones y texturas",
  "El impacto de la tecnología en la moda",
  "Cómo vestir de manera elegante sin gastar una fortuna",
  "Las mejores colecciones de moda presentadas en 2024",
  "Cómo los influencers están cambiando la industria de la moda"
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