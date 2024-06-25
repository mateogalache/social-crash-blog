import { generateAndUploadContent } from './generateArticles.js';


const temas = [ 
        "Los destinos de viaje más populares para el verano 2024",
        "Consejos para viajar con un presupuesto limitado",
        "Cómo planificar un viaje de mochilero por Europa",
        "Las mejores playas del mundo para visitar este año",
        "Cómo encontrar vuelos baratos: trucos y recomendaciones",
        "Los lugares más instagrameables del 2024",
        "Guía para viajar de manera sostenible y responsable",
        "Las ciudades más seguras para mujeres que viajan solas",
        "Cómo preparar tu equipaje de mano de manera eficiente",
        "Los mejores destinos para una luna de miel inolvidable",
        "Consejos para evitar el jet lag en viajes largos",
        "Las mejores rutas de senderismo alrededor del mundo",
        "Cómo planificar un viaje familiar sin estrés",
        "Los destinos emergentes que deberías visitar antes que nadie",
        "Las mejores ciudades para disfrutar de la gastronomía local",
        "Cómo viajar con mascotas: consejos y recomendaciones",
        "Los mejores festivales culturales del 2024",
        "Consejos para alquilar un coche en el extranjero",
        "Las islas paradisíacas que debes visitar este año",
        "Cómo encontrar alojamiento económico y de calidad",
        "Las mejores experiencias de viaje en tren",
        "Consejos para mantener la seguridad durante tus viajes",
        "Los mejores destinos para practicar deportes acuáticos",
        "Cómo planificar un viaje de aventura",
        "Las ciudades con la mejor vida nocturna",
        "Guía para un viaje por carretera inolvidable",
        "Los destinos más románticos para parejas",
        "Cómo viajar durante la temporada alta sin agobios",
        "Los mejores destinos de ecoturismo",
        "Consejos para aprender idiomas durante tus viajes"
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