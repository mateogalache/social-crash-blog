import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Las mejores escapadas de fin de semana",
    "Cómo hacer un viaje alrededor del mundo",
    "Los destinos históricos más fascinantes",
    "Consejos para viajar en solitario y disfrutar al máximo",
    "Las maravillas naturales que debes ver al menos una vez",
    "Cómo aprovechar al máximo tu tiempo en el aeropuerto",
    "Los mejores destinos para el turismo de bienestar",
    "Consejos para evitar enfermedades durante los viajes",
    "Los mejores lugares para hacer snorkel y buceo",
    "Cómo documentar tus viajes: fotografía y video",
    "Las rutas en bicicleta más impresionantes del mundo",
    "Consejos para viajar de manera espontánea",
    "Los mejores destinos para los amantes del vino",
    "Cómo encontrar tours y actividades locales auténticas",
    "Los destinos de montaña más hermosos",
    "Consejos para mantener tu presupuesto de viaje",
    "Las ciudades con la mejor arquitectura",
    "Cómo planificar un viaje de voluntariado",
    "Los mejores destinos para viajar con amigos",
    "Cómo evitar el mal de altura en destinos elevados",
    "Las mejores playas para surfear",
    "Consejos para viajar con niños pequeños",
    "Los mejores destinos para amantes de la naturaleza",
    "Cómo hacer un viaje en crucero",
    "Las ciudades más baratas para viajar en 2024",
    "Cómo disfrutar de un viaje de lujo sin arruinarte",
    "Los festivales de música que no te puedes perder",
    "Consejos para viajar a destinos exóticos",
    "Las mejores ciudades para los amantes del arte",
    "Cómo planificar un viaje gastronómico"
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