import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "Los beneficios de una dieta baja en carbohidratos",
  "Cómo planificar comidas saludables para una semana ocupada",
  "Recetas saludables para cenar",
  "Alimentos que ayudan a reducir la inflamación",
  "Consejos para una dieta balanceada en una vida ocupada",
  "Los mitos más comunes sobre la pérdida de peso",
  "Cómo la nutrición afecta tu rendimiento deportivo",
  "Alimentos ricos en proteínas vegetales",
  "Cómo hacer una transición saludable a una dieta vegana",
  "El impacto del alcohol en la salud y la dieta",
  "Cómo los antioxidantes benefician tu salud",
  "La importancia del desayuno para una vida saludable",
  "Alimentos que mejoran la salud cardiovascular",
  "Cómo reducir el consumo de azúcar sin sacrificar el sabor",
  "La relación entre la dieta y la salud mental",
  "Alimentos que ayudan a fortalecer el sistema inmunológico",
  "Cómo la hidratación afecta tu salud general",
  "La importancia de la dieta en la prevención de enfermedades",
  "Consejos para una alimentación consciente y saludable",
  "El impacto de la nutrición en la longevidad",
  "Cómo los alimentos fermentados benefician tu salud",
  "La importancia de los ácidos grasos omega-3 en la dieta",
  "Cómo planificar una dieta equilibrada para toda la familia",
  "Alimentos que mejoran la salud digestiva",
  "El impacto de los aditivos alimentarios en la salud",
  "Consejos para mantener una dieta saludable durante el embarazo",
  "La relación entre la nutrición y la salud del cerebro",
  "Cómo los suplementos pueden apoyar una dieta equilibrada",
  "Alimentos que ayudan a mantener la piel saludable",
  "La importancia de la nutrición en la recuperación de enfermedades",
  "Cómo evitar los alimentos ultraprocesados"
]

export async function generateNutricion () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"nutricion");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}