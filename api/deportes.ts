import { generateAndUploadContent } from './generateArticles.js';


const temas = [
  "El impacto de la inteligencia artificial en los deportes",
  "Las mejores jugadas de la Copa Mundial de la FIFA 2024",
  "Consejos para mejorar tu rendimiento en el gimnasio",
  "Cómo elegir el equipo adecuado para deportes de invierno",
  "La evolución de las reglas en el fútbol moderno",
  "Los mejores entrenadores de la NBA en 2024",
  "Cómo prevenir lesiones comunes en corredores",
  "El auge de los deportes electrónicos en 2024",
  "La influencia de la nutrición en el rendimiento deportivo",
  "Los récords más impresionantes en los Juegos Olímpicos",
  "Cómo el yoga puede mejorar tu rendimiento deportivo",
  "El futuro del ciclismo: tendencias y tecnologías",
  "Las estrellas emergentes en el tenis femenino",
  "Cómo la psicología deportiva está ayudando a los atletas",
  "Los deportes extremos más populares del año",
  "La importancia del calentamiento y el enfriamiento en el deporte",
  "El impacto de los contratos millonarios en el deporte profesional",
  "Las mejores competiciones de natación del año",
  "Cómo los atletas están usando las redes sociales",
  "Las ligas de fútbol más competitivas de 2024",
  "El impacto del cambio climático en los eventos deportivos",
  "Las mejores estrategias para mejorar en el golf",
  "La evolución del baloncesto femenino",
  "Los beneficios del crossfit para la salud",
  "Cómo organizar una carrera benéfica",
  "El papel de la tecnología en el entrenamiento deportivo",
  "Las leyendas del deporte que se retiraron este año",
  "Cómo manejar el estrés en competencias deportivas",
  "El futuro de los deportes acuáticos",
  "Las mejores historias de superación en el deporte",
  "Cómo el deporte puede fomentar la inclusión social"
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