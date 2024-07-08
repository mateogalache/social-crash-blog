import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "Los beneficios del ejercicio regular para la salud mental",
  "Cómo mantener una dieta equilibrada en una vida ocupada",
  "La importancia de la hidratación para la salud",
  "Cómo mejorar tu salud cardiovascular",
  "Los efectos del estrés en el cuerpo y cómo manejarlo",
  "La relación entre el sueño y la salud mental",
  "Consejos para una vida saludable en la tercera edad",
  "Cómo prevenir enfermedades crónicas con una buena alimentación",
  "La importancia de la salud intestinal para el bienestar general",
  "Cómo manejar la ansiedad en el día a día",
  "Los beneficios del yoga para la salud física y mental",
  "Cómo mantener una buena postura y evitar el dolor de espalda",
  "La importancia de las revisiones médicas regulares",
  "Cómo cuidar tu salud dental",
  "Los efectos del alcohol en la salud y cómo reducir su consumo",
  "Consejos para una alimentación saludable durante el embarazo",
  "Cómo mejorar la salud emocional",
  "Los beneficios del ejercicio al aire libre",
  "La relación entre la salud física y la mental",
  "Cómo manejar el estrés laboral",
  "Los mejores suplementos para una buena salud general",
  "Cómo mejorar tu salud digestiva",
  "La importancia de la vitamina D para la salud",
  "Cómo mantener una piel saludable",
  "Los beneficios de una dieta rica en frutas y verduras",
  "Cómo evitar el agotamiento físico y mental",
  "La relación entre la salud y el bienestar financiero",
  "Consejos para mantener la salud durante el invierno",
  "Los efectos del tabaquismo en la salud y cómo dejar de fumar",
  "Cómo mejorar tu salud ósea",
  "Los beneficios de la meditación para la salud mental"
]
export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"salud");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}