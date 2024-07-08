import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "El papel de los fisioterapeutas en el deporte profesional",
  "Las innovaciones en el equipamiento deportivo",
  "Cómo elegir la bicicleta perfecta para ti",
  "Los beneficios del entrenamiento en altitud",
  "El impacto de los deportes en la salud mental",
  "Las competiciones de atletismo más emocionantes del año",
  "El futuro de las artes marciales mixtas",
  "Cómo los deportes están abordando la igualdad de género",
  "Las mejores técnicas de recuperación para atletas",
  "El papel de los fans en el éxito de los equipos deportivos",
  "Las historias más inspiradoras de los Paralímpicos",
  "Cómo el deporte puede ayudar a combatir la obesidad",
  "Las mejores academias deportivas del mundo",
  "El impacto de las apuestas en el deporte",
  "Cómo los deportes están utilizando la realidad virtual",
  "Las estrellas del deporte que también son empresarios",
  "El auge de los deportes urbanos",
  "Cómo los atletas se preparan para los Juegos Olímpicos",
  "Las mejores técnicas de entrenamiento para la velocidad",
  "El impacto de la globalización en el deporte",
  "Cómo los equipos deportivos están adoptando la sostenibilidad",
  "Las mejores competiciones de deportes de motor",
  "El papel de la genética en el rendimiento deportivo",
  "Las mejores historias de rivalidad en el deporte",
  "Cómo los atletas se recuperan de las lesiones graves",
  "El impacto de la pandemia en los eventos deportivos",
  "Las mejores técnicas de entrenamiento mental para atletas",
  "El papel de la familia en el éxito de los deportistas",
  "Las mejores historias de amistad en el deporte",
  "Cómo los deportes pueden mejorar la vida de los jóvenes",
  "El futuro de los deportes tradicionales"
]

export async function generateDeportes2 () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"deportes");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}