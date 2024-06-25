import { generateAndUploadContent } from './generateArticles.js';

const temas = [
    "Las mejores prácticas para una salud ocular óptima",
    "Consejos para mantener un corazón sano",
    "Alimentos que mejoran la salud cerebral",
    "Cómo combatir el insomnio de manera natural",
    "Beneficios del ejercicio al aire libre",
    "La importancia del equilibrio entre vida laboral y personal",
    "Técnicas de respiración para mejorar la salud",
    "La relación entre la salud emocional y la salud física",
    "Cómo la música puede mejorar tu bienestar",
    "Beneficios de la terapia con mascotas para la salud mental",
    "La importancia de una buena postura en la vida diaria",
    "Cómo gestionar el estrés en tiempos de incertidumbre",
    "La relación entre el ejercicio y la salud del cerebro",
    "Consejos para una alimentación consciente y saludable",
    "Cómo los probióticos pueden mejorar tu salud",
    "La influencia de la microbiota en la salud",
    "La importancia del autocuidado para el bienestar general",
    "Estrategias para mantener una mente activa y saludable",
    "El papel de la actividad física en la prevención de enfermedades",
    "Cómo la calidad del aire afecta tu salud",
    "La relación entre la salud y el bienestar financiero",
    "Cómo mantener una salud óptima durante el envejecimiento",
    "El impacto de los hábitos de sueño en la salud general",
    "Consejos para una desintoxicación saludable",
    "La importancia de la actividad física en los niños",
    "Cómo la risa puede mejorar tu salud",
    "La relación entre la salud del corazón y la dieta",
    "Estrategias para mejorar la salud mental en adolescentes",
    "El papel de la nutrición en la prevención del cáncer",
    "Cómo la meditación puede transformar tu vida"
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