import { generateAndUploadContent } from '../api/generateArticles.js';


const temas =  [
  "Las mejores rutas en moto del mundo",
  "Cómo elegir el mejor coche para viajar",
  "Las innovaciones en los motores de combustión",
  "Cómo mejorar la aerodinámica de tu coche",
  "Las mejores prácticas para el mantenimiento de motos",
  "El impacto de los coches autónomos en la seguridad vial",
  "Cómo elegir el mejor casco para moto",
  "Las mejores rutas de viaje en coche por Europa",
  "El futuro de los camiones eléctricos",
  "Cómo mejorar el sistema de sonido de tu coche",
  "Las mejores motos eléctricas del mercado",
  "El impacto del cambio climático en la industria del motor",
  "Cómo elegir los mejores accesorios para tu coche",
  "Las mejores prácticas para la conducción eficiente",
  "El futuro de los coches de lujo",
  "Cómo mantener tu coche en buen estado durante el verano",
  "Los coches más innovadores de 2024",
  "Cómo elegir el mejor sistema de navegación para tu coche",
  "Las mejores rutas de viaje en moto por América del Sur",
  "El impacto de la digitalización en la industria automotriz",
  "Cómo mejorar la seguridad de tu moto",
  "Las mejores motos para viajes largos",
  "El futuro de los coches solares",
  "Cómo elegir el mejor seguro de moto",
  "Las mejores prácticas para la conducción en montaña",
  "El impacto de las nuevas regulaciones en la industria automotriz",
  "Cómo mantener tu coche en buen estado durante el invierno",
  "Las mejores rutas de viaje en coche por América del Norte",
  "El futuro de los coches deportivos",
  "Cómo elegir el mejor coche para aventuras off-road",
  "Las mejores prácticas para la conducción en ciudad"
]

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"motor");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}