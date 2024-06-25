import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Los mejores hábitos alimenticios para mantener un peso saludable",
    "Cómo combatir la fatiga con una nutrición adecuada",
    "El papel de los micronutrientes en la salud",
    "Consejos para una alimentación saludable en niños",
    "Alimentos que mejoran la salud cerebral",
    "La importancia del desayuno para el rendimiento diario",
    "Cómo evitar el comer emocional",
    "Los beneficios de una dieta basada en plantas",
    "Cómo reducir el desperdicio de alimentos en casa",
    "La conexión entre la nutrición y la salud cardiovascular",
    "Alimentos que ayudan a desintoxicar el cuerpo",
    "Cómo mantener la salud ósea a través de la alimentación",
    "Los mejores snacks saludables para llevar al trabajo",
    "La importancia de las grasas saludables en la dieta",
    "Cómo adaptar tu dieta a diferentes etapas de la vida",
    "Consejos para mejorar la digestión a través de la alimentación",
    "El impacto de las bebidas azucaradas en la salud",
    "Cómo hacer compras inteligentes y saludables en el supermercado",
    "La relación entre la alimentación y la piel saludable",
    "Cómo evitar los antojos y mantener una dieta equilibrada",
    "Los beneficios del té verde para la salud",
    "Alimentos que ayudan a reducir el colesterol",
    "Cómo planificar una dieta para personas mayores",
    "La importancia de la vitamina D y cómo obtenerla",
    "Consejos para mantener una alimentación saludable en invierno",
    "Cómo los colores de los alimentos indican sus beneficios",
    "El impacto de los hábitos alimenticios en la energía diaria",
    "Alimentos fermentados y sus beneficios para la salud",
    "Cómo balancear una dieta rica en carbohidratos",
    "La influencia de la alimentación en la salud mental"
]

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"nutricion");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}