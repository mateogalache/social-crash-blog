import { generateAndUploadContent } from './generateArticles.js';


const temas = [
  "Los coches híbridos más eficientes de 2024",
  "Cómo elegir la mejor moto para viajar",
  "Las innovaciones en los coches autónomos",
  "Cómo mantener tu coche en perfecto estado",
  "Los coches deportivos más esperados del año",
  "El impacto de los coches eléctricos en el medio ambiente",
  "Cómo elegir el mejor seguro de coche",
  "Las mejores rutas para un viaje en coche",
  "El futuro de los vehículos eléctricos",
  "Cómo mejorar el rendimiento de tu moto",
  "Las mejores prácticas para la conducción segura",
  "El impacto de la tecnología en los coches modernos",
  "Cómo preparar tu coche para el invierno",
  "Las mejores motos para principiantes",
  "El futuro de la movilidad urbana",
  "Cómo elegir los mejores neumáticos para tu coche",
  "Las innovaciones en la industria automotriz",
  "Cómo mantener tu coche limpio y en buen estado",
  "Los coches más seguros de 2024",
  "Cómo mejorar la eficiencia de combustible de tu coche",
  "Las mejores motos deportivas del año",
  "El impacto de las políticas ambientales en la industria automotriz",
  "Cómo elegir el mejor coche para la ciudad",
  "Las mejores prácticas para la conducción en carretera",
  "El futuro de los coches conectados",
  "Cómo mantener tu moto en perfecto estado",
  "Los coches más económicos del mercado",
  "Cómo elegir el mejor coche para tu familia",
  "Las mejores motos para aventuras off-road",
  "El impacto de la inteligencia artificial en la conducción",
  "Cómo mantener tu coche seguro en todo momento"
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