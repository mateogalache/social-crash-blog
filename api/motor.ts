import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Los coches eléctricos más esperados de 2024",
    "Consejos para mantener tu coche en óptimas condiciones",
    "La evolución de los vehículos autónomos",
    "Cómo elegir el mejor coche para tu familia",
    "Las motos más populares del año",
    "El impacto de la tecnología en la industria automotriz",
    "Los mejores SUV del mercado en 2024",
    "Cómo mejorar el rendimiento de tu coche",
    "Las novedades del Salón del Automóvil de Ginebra 2024",
    "Los coches deportivos más impresionantes del año",
    "Consejos para comprar un coche de segunda mano",
    "La revolución de los camiones eléctricos",
    "Cómo preparar tu coche para un viaje largo",
    "Los mejores accesorios para personalizar tu vehículo",
    "El futuro de los coches voladores",
    "Las ventajas y desventajas de los coches híbridos",
    "Consejos para conducir de manera segura en invierno",
    "Las marcas de coches más confiables de 2024",
    "Cómo funciona la tecnología de frenado automático",
    "Los coches clásicos que nunca pasan de moda",
    "El impacto del cambio climático en la industria automotriz",
    "Cómo elegir el mejor seguro para tu coche",
    "Las motos eléctricas que están revolucionando el mercado",
    "Consejos para ahorrar combustible",
    "Las tendencias en el diseño de coches modernos",
    "El auge de las bicicletas eléctricas",
    "Cómo la inteligencia artificial está cambiando la conducción",
    "Los coches de lujo más impresionantes de 2024",
    "Cómo cuidar la pintura de tu coche",
    "Los mejores coches para viajes por carretera"
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