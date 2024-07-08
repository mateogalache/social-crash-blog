import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "Cómo integrar la educación emocional en el aula",
  "El impacto de la inteligencia artificial en la educación",
  "Las mejores prácticas para el aprendizaje colaborativo",
  "Cómo preparar a los estudiantes para un mundo digital",
  "Las tendencias emergentes en la educación en 2024",
  "El papel de la tecnología en la educación inclusiva",
  "Cómo fomentar el pensamiento crítico en los estudiantes",
  "La importancia de la alfabetización digital",
  "Las mejores estrategias para la educación en línea",
  "Cómo enseñar habilidades de resolución de problemas",
  "El futuro de la educación STEM",
  "Cómo los profesores pueden usar las redes sociales",
  "Las mejores técnicas de evaluación en el aula",
  "El impacto de los programas de intercambio en la educación",
  "Cómo crear un ambiente de aprendizaje positivo",
  "La importancia de la educación en la primera infancia",
  "El papel de los padres en la educación de los hijos",
  "Las mejores prácticas para la educación bilingüe",
  "Cómo manejar el estrés en el entorno educativo",
  "La evolución de los métodos de enseñanza tradicionales",
  "El impacto de la globalización en la educación",
  "Cómo fomentar la creatividad en los estudiantes",
  "Las mejores herramientas digitales para la educación",
  "El papel de la educación en la sostenibilidad",
  "Cómo enseñar habilidades de liderazgo a los estudiantes",
  "Las mejores técnicas para la enseñanza de matemáticas",
  "El impacto de la pandemia en la educación",
  "Cómo los juegos pueden mejorar el aprendizaje",
  "Las mejores estrategias para la educación a distancia",
  "El futuro de las universidades en la era digital",
  "Cómo enseñar pensamiento crítico en la era de la información"
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