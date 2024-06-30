import { generateAndUploadContent } from './generateArticles.js';


const temas = [
  "Los destinos más exóticos para tus próximas vacaciones",
  "Consejos para viajar de manera sostenible",
  "Cómo encontrar las mejores ofertas de vuelos",
  "Los secretos mejor guardados de Europa",
  "Guía para una escapada de fin de semana perfecta",
  "Cómo planificar un viaje de mochilero sin estrés",
  "Las mejores experiencias gastronómicas alrededor del mundo",
  "Cómo viajar con niños: consejos y recomendaciones",
  "Los destinos más románticos para una luna de miel",
  "Consejos para viajar solo de manera segura",
  "Las mejores rutas de senderismo en América del Norte",
  "Cómo preparar tu coche para un viaje largo",
  "Los mejores destinos de aventura para este año",
  "Consejos para evitar el jet lag en viajes internacionales",
  "Las playas más impresionantes que debes visitar",
  "Cómo viajar barato sin sacrificar la comodidad",
  "Los mejores destinos para practicar deportes acuáticos",
  "Guía para un viaje de lujo asequible",
  "Cómo encontrar alojamiento único y económico",
  "Los destinos más subestimados del mundo",
  "Consejos para un viaje culturalmente enriquecedor",
  "Las mejores ciudades para los amantes del arte",
  "Cómo documentar tus viajes: consejos de fotografía",
  "Los festivales de música que no te puedes perder",
  "Cómo viajar de manera espontánea",
  "Los destinos de invierno más impresionantes",
  "Guía para un viaje de esquí perfecto",
  "Cómo mantener tu salud mientras viajas",
  "Los mejores destinos para viajar con amigos",
  "Consejos para viajar con mascotas",
  "Las rutas de tren más pintorescas del mundo"
]

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"viajes");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}