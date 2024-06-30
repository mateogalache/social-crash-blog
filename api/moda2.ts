import { generateAndUploadContent } from './generateArticles.js';


const temas =  [
  "Las tendencias de calzado para este año",
  "Cómo mantener la ropa en buen estado por más tiempo",
  "Las mejores prendas básicas que no pueden faltar en tu armario",
  "Cómo adaptar las tendencias de pasarela a la vida diaria",
  "El papel de la moda en la identidad cultural",
  "Cómo elegir el mejor par de gafas de sol",
  "Las tendencias de moda para el invierno 2024",
  "Cómo encontrar las mejores ofertas en ropa de marca",
  "El impacto de los desfiles de moda virtuales",
  "Cómo vestir de manera apropiada en diferentes culturas",
  "Las mejores técnicas para cuidar tu ropa",
  "Cómo crear looks monocromáticos elegantes",
  "Las tendencias de moda más influyentes de la década",
  "Cómo encontrar ropa de calidad a precios asequibles",
  "Las mejores tiendas de ropa de segunda mano",
  "Cómo combinar ropa de diferentes estaciones",
  "El impacto de la moda en la autoexpresión",
  "Cómo elegir el mejor bolso para cada ocasión",
  "Las tendencias de moda para la primavera 2024",
  "Cómo encontrar tu estilo personal en la moda masculina",
  "Las mejores técnicas para organizar tu armario",
  "Cómo adaptar las tendencias de moda a tu cuerpo",
  "El impacto de la sostenibilidad en la moda",
  "Cómo encontrar inspiración de moda en las redes sociales",
  "Las mejores marcas de moda accesible",
  "Cómo elegir la ropa adecuada para tu tipo de cuerpo",
  "Las tendencias de moda para el verano 2024",
  "Cómo cuidar tus prendas de lana",
  "Las mejores tiendas de moda online",
  "Cómo encontrar el equilibrio entre moda y comodidad",
  "Las tendencias de moda más innovadoras de 2024"
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