import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Los secretos del entrenamiento de Lionel Messi",
    "Cómo los Lakers conquistaron su 18º título de la NBA",
    "Estrategias ganadoras en Roland Garros: análisis de Djokovic",
    "Impacto de la llegada de Mbappé al Real Madrid",
    "Simone Biles: la mentalidad detrás de una campeona olímpica",
    "Jóvenes ciclistas a seguir en el Tour de Francia 2024",
    "El camino de la selección femenina de EEUU hacia el Mundial",
    "Las posibles opciones de Cristiano Ronaldo para la próxima temporada",
    "Análisis de la histórica victoria número 100 de Lewis Hamilton",
    "Nuevas reglas de la NBA y cómo afectarán el juego",
    "La despedida de Rafael Nadal del tenis profesional",
    "Golden State Warriors: refuerzos y expectativas para la nueva temporada",
    "Perfil del nuevo entrenador del FC Barcelona",
    "El regreso de Serena Williams: qué esperar",
    "Jugadores clave y estrategias en el Mundial de Rugby 2024",
    "Predicciones para la UEFA Champions League 2024",
    "Dominio de los Yankees en la MLB: claves del éxito",
    "Conor McGregor y su esperado regreso a la UFC",
    "Medidas de seguridad en la NFL: impacto y opiniones",
    "El legado de Michael Phelps en la natación moderna",
    "Fichajes destacados en la Liga MX para el nuevo torneo",
    "La influencia de las redes sociales en la carrera de los deportistas",
    "Desafíos y expectativas para la selección española de baloncesto",
    "Estrellas emergentes en el atletismo mundial",
    "Tecnología innovadora en el rendimiento deportivo",
    "Historias inspiradoras de los Juegos Paralímpicos 2024",
    "Equipos a seguir en la Premier League 2024",
    "Efectos del cambio climático en los deportes al aire libre",
    "Evolución del tenis femenino en la última década",
    "El futuro incierto de la Superliga europea de fútbol"
]

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"deportes");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}