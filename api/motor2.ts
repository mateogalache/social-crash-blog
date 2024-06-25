import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Las innovaciones más recientes en motores de combustión",
    "Cómo mantener tu moto en perfecto estado",
    "El papel de los coches en el futuro de las ciudades inteligentes",
    "Consejos para comprar una moto de segunda mano",
    "Los vehículos más eficientes en consumo de combustible",
    "El impacto de las nuevas normativas de emisiones en los coches",
    "Cómo elegir los mejores neumáticos para tu coche",
    "Las competiciones de motor más emocionantes del año",
    "El futuro de los coches conectados",
    "Cómo los coches autónomos están cambiando el transporte",
    "Los mejores modelos de coches compactos en 2024",
    "Consejos para mejorar la seguridad en moto",
    "La evolución de los coches de carreras",
    "Cómo elegir la mejor moto para principiantes",
    "Los avances en la tecnología de baterías para vehículos eléctricos",
    "Consejos para el mantenimiento regular de tu coche",
    "Las marcas de coches más innovadoras del momento",
    "Cómo la realidad aumentada está mejorando la experiencia de conducción",
    "Los coches conceptuales más futuristas de 2024",
    "El impacto de la digitalización en los servicios de automoción",
    "Cómo los coches eléctricos están cambiando el mercado de segunda mano",
    "Las motos de aventura más recomendadas",
    "Cómo elegir el mejor equipo de protección para motoristas",
    "Los coches más rápidos del mundo en 2024",
    "La historia y evolución de los coches híbridos",
    "Consejos para alargar la vida útil de tu coche",
    "Los mejores eventos de motor para asistir este año",
    "Cómo la economía está afectando a la industria del motor",
    "Los coches más seguros del mercado en 2024",
    "El futuro de los coches solares"
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