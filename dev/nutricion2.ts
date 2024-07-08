import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "Alimentos que mejoran la salud ocular",
  "Cómo hacer una desintoxicación de azúcar",
  "El papel de los superalimentos en la dieta moderna",
  "Consejos para una dieta equilibrada en la tercera edad",
  "La importancia de la vitamina C en la dieta diaria",
  "Cómo mantener una dieta saludable durante las vacaciones",
  "Alimentos que ayudan a reducir el colesterol",
  "La relación entre la dieta y la salud hormonal",
  "Cómo planificar comidas saludables para niños",
  "El impacto de la nutrición en la salud ósea",
  "Alimentos que ayudan a combatir la fatiga",
  "Cómo mantener una dieta equilibrada en el trabajo",
  "La importancia de los fitoquímicos en la dieta",
  "Consejos para una dieta saludable para diabéticos",
  "El impacto de la nutrición en el rendimiento académico",
  "Cómo planificar comidas saludables para adolescentes",
  "Alimentos que ayudan a mejorar la memoria",
  "La relación entre la dieta y la salud dental",
  "Cómo mantener una dieta equilibrada durante la lactancia",
  "La importancia de los minerales en la dieta",
  "Consejos para una dieta saludable para hipertensos",
  "El impacto de la nutrición en la salud renal",
  "Cómo planificar comidas saludables para vegetarianos",
  "Alimentos que ayudan a mejorar la salud del hígado",
  "La relación entre la dieta y la salud emocional",
  "Cómo mantener una dieta equilibrada en climas fríos",
  "La importancia de la fibra en la dieta diaria",
  "Consejos para una dieta saludable para celíacos",
  "El impacto de la nutrición en la salud del corazón",
  "Cómo planificar comidas saludables para personas mayores",
  "Alimentos que ayudan a mejorar la salud del cabello"
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