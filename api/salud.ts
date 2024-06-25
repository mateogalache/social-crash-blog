import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Los beneficios del ayuno intermitente: lo que dicen los estudios",
    "Cómo mantener una dieta equilibrada en una agenda ocupada",
    "La importancia del sueño para la salud mental y física",
    "Técnicas efectivas de meditación para reducir el estrés",
    "Ejercicios para mejorar la salud cardiovascular",
    "Alimentos que ayudan a fortalecer el sistema inmunológico",
    "La conexión entre la salud intestinal y el bienestar general",
    "Cómo gestionar la ansiedad en el entorno laboral",
    "La importancia de la hidratación para el rendimiento físico",
    "Consejos para una piel saludable en todas las estaciones",
    "El impacto del ejercicio regular en la longevidad",
    "La relación entre el azúcar y las enfermedades crónicas",
    "Formas naturales de mejorar la salud mental",
    "El papel de la genética en la salud personal",
    "La efectividad de los suplementos vitamínicos: mitos y realidades",
    "Beneficios del yoga para el cuerpo y la mente",
    "Cómo la tecnología está revolucionando la atención médica",
    "Estrategias para dejar de fumar de manera efectiva",
    "La importancia de las revisiones médicas periódicas",
    "Dieta mediterránea: beneficios y cómo adoptarla",
    "Ejercicios para mejorar la postura y evitar dolores de espalda",
    "La influencia del estrés crónico en la salud",
    "Cómo prevenir enfermedades a través de la nutrición",
    "Impacto de las redes sociales en la salud mental",
    "Terapias alternativas para el manejo del dolor",
    "La importancia del ejercicio para la salud mental",
    "Cómo elegir el mejor programa de ejercicios para ti",
    "La relación entre la salud dental y la salud general",
    "Beneficios de la práctica regular de pilates",
    "Cómo crear un ambiente saludable en casa"
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