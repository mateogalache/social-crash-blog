import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Los beneficios del ayuno intermitente para la salud",
    "Cómo planificar comidas equilibradas para toda la semana",
    "La importancia de los macronutrientes en la dieta diaria",
    "Superalimentos que deberías incorporar a tu dieta",
    "Consejos para una dieta vegana balanceada",
    "Los efectos del azúcar en la salud y cómo reducir su consumo",
    "La relación entre la alimentación y el estado de ánimo",
    "Cómo leer etiquetas nutricionales de manera efectiva",
    "Los mejores suplementos para apoyar la salud general",
    "El impacto de los alimentos procesados en la salud",
    "Dieta mediterránea: beneficios y cómo implementarla",
    "Cómo mantener una alimentación saludable durante los viajes",
    "La importancia de la fibra en la dieta diaria",
    "Alimentos ricos en antioxidantes y sus beneficios",
    "Cómo evitar las dietas de moda y optar por una nutrición sostenible",
    "La conexión entre la salud intestinal y el sistema inmunológico",
    "Consejos para reducir el consumo de sodio",
    "La importancia de mantenerse hidratado: cuánta agua necesitas",
    "Cómo gestionar las alergias alimentarias de manera efectiva",
    "El papel de las proteínas en la construcción muscular",
    "Alimentos antiinflamatorios que deberías consumir",
    "Cómo la nutrición puede influir en la calidad del sueño",
    "La importancia de los ácidos grasos omega-3",
    "Diferencias entre alimentos orgánicos y convencionales",
    "Cómo preparar comidas rápidas y saludables",
    "El impacto de los edulcorantes artificiales en la salud",
    "Cómo planificar una dieta equilibrada para deportistas",
    "Beneficios de los probióticos y prebióticos",
    "La relación entre la dieta y la prevención de enfermedades crónicas",
    "Cómo hacer una desintoxicación saludable"
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