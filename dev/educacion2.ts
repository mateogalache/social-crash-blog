import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "El papel de la educación en la igualdad de género",
  "Cómo integrar la educación ambiental en el currículo",
  "Las mejores prácticas para la educación personalizada",
  "El impacto de la inteligencia emocional en el aprendizaje",
  "Cómo los estudiantes pueden aprovechar al máximo la tecnología",
  "Las mejores estrategias para la enseñanza de ciencias",
  "El papel de los tutores en el éxito académico",
  "Cómo preparar a los estudiantes para el mercado laboral",
  "Las mejores técnicas para la enseñanza de idiomas",
  "El impacto de la educación física en el rendimiento académico",
  "Cómo manejar la diversidad en el aula",
  "Las mejores estrategias para la enseñanza de historia",
  "El futuro de la educación profesional y técnica",
  "Cómo los profesores pueden motivar a los estudiantes",
  "Las mejores prácticas para la educación inclusiva",
  "El impacto de la educación artística en el desarrollo infantil",
  "Cómo los estudiantes pueden desarrollar habilidades de investigación",
  "Las mejores técnicas para la enseñanza de lectura y escritura",
  "El papel de la educación en la construcción de la paz",
  "Cómo los estudiantes pueden aprender a trabajar en equipo",
  "Las mejores estrategias para la educación en valores",
  "El impacto de la tecnología en la educación especial",
  "Cómo los estudiantes pueden desarrollar habilidades de comunicación",
  "Las mejores técnicas para la enseñanza de geografía",
  "El futuro de la educación en el hogar",
  "Cómo los profesores pueden manejar el comportamiento en el aula",
  "Las mejores prácticas para la educación intercultural",
  "El impacto de la educación en la salud mental de los estudiantes",
  "Cómo los estudiantes pueden aprender a pensar críticamente",
  "Las mejores estrategias para la educación en la era digital",
  "El papel de la educación en el desarrollo sostenible"
]

export async function generateEducacion2 () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"educacion");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}