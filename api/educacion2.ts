import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "El impacto de las actividades extracurriculares en el desarrollo del estudiante",
    "Métodos para evaluar el aprendizaje de manera efectiva",
    "El futuro de la educación superior en la era digital",
    "Cómo involucrar a los padres en el proceso educativo",
    "El papel de la educación financiera en la escuela",
    "Estrategias para fomentar la auto-disciplina en los estudiantes",
    "La importancia de la educación en la primera infancia",
    "Cómo utilizar la tecnología para personalizar el aprendizaje",
    "El impacto del aprendizaje híbrido en la educación",
    "Cómo enseñar habilidades de resolución de problemas",
    "La relación entre la educación y la salud mental",
    "Estrategias para manejar el acoso escolar",
    "La importancia de la educación intercultural",
    "Cómo fomentar el aprendizaje autodirigido",
    "El papel de la educación en el desarrollo sostenible",
    "Estrategias para mejorar la atención en clase",
    "Cómo enseñar pensamiento computacional a niños",
    "El impacto de la pandemia en la educación: lecciones aprendidas",
    "Cómo utilizar la realidad aumentada en la enseñanza",
    "El papel de los bibliotecarios en la educación moderna",
    "Estrategias para fomentar el trabajo en equipo",
    "La importancia de la educación sexual en las escuelas",
    "Cómo enseñar a los estudiantes a gestionar su tiempo",
    "El impacto de los viajes educativos en el aprendizaje",
    "Estrategias para mejorar la alfabetización digital",
    "La relación entre el arte y el desarrollo cognitivo",
    "Cómo utilizar la retroalimentación para mejorar el aprendizaje",
    "Estrategias para la educación en áreas rurales",
    "El papel de la educación en la promoción de la igualdad de género",
    "Cómo enseñar a los estudiantes a ser ciudadanos globales"
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