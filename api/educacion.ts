import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Estrategias efectivas para la educación en línea",
    "Cómo fomentar el pensamiento crítico en los estudiantes",
    "La importancia de la educación emocional en las escuelas",
    "Métodos innovadores para enseñar matemáticas",
    "El impacto de la tecnología en el aula moderna",
    "Consejos para mejorar la comunicación entre padres y maestros",
    "Cómo crear un entorno de aprendizaje inclusivo",
    "La importancia de la lectura en el desarrollo infantil",
    "Estrategias para motivar a los estudiantes desinteresados",
    "El papel de la inteligencia emocional en la educación",
    "Beneficios del aprendizaje basado en proyectos",
    "Cómo manejar el estrés en el entorno escolar",
    "La evolución del currículo escolar en la era digital",
    "Métodos efectivos para la enseñanza de idiomas",
    "El papel de las artes en la educación integral",
    "Cómo desarrollar habilidades de liderazgo en los estudiantes",
    "La importancia del aprendizaje socioemocional",
    "Estrategias para la educación personalizada",
    "El impacto del aprendizaje colaborativo en el aula",
    "Consejos para integrar la educación ambiental en el currículo",
    "La relación entre la educación física y el rendimiento académico",
    "Cómo preparar a los estudiantes para el futuro laboral",
    "El uso de la gamificación en la enseñanza",
    "La importancia de la formación continua para los maestros",
    "Estrategias para enseñar a estudiantes con necesidades especiales",
    "El papel de la educación STEM en el siglo XXI",
    "Cómo fomentar la creatividad en el aula",
    "La influencia del entorno familiar en el rendimiento escolar",
    "Estrategias para la enseñanza de habilidades blandas",
    "Cómo utilizar el aprendizaje a través del juego"
]

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"educacion");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}