import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Cómo invertir en startups y empresas emergentes",
    "El papel de los bancos centrales en la economía global",
    "Estrategias para la gestión de riesgos en inversiones",
    "La importancia de la diversificación en la inversión",
    "Cómo identificar y evitar fraudes financieros",
    "El futuro de las pensiones y los planes de retiro",
    "Estrategias para la inversión en bonos",
    "Cómo los cambios fiscales afectan tus finanzas",
    "La importancia de la salud financiera para el bienestar general",
    "Cómo aprovechar las oportunidades en mercados emergentes",
    "El impacto de la tecnología blockchain en las finanzas",
    "Consejos para invertir en el mercado de divisas",
    "El papel de la economía colaborativa en las finanzas personales",
    "Cómo utilizar los datos para tomar decisiones financieras",
    "Estrategias para la inversión en bienes raíces comerciales",
    "El impacto de la política internacional en los mercados financieros",
    "Cómo gestionar las finanzas de un negocio pequeño",
    "La relación entre la inflación y las inversiones",
    "Consejos para la compra y venta de acciones",
    "El papel de las agencias de calificación crediticia",
    "Cómo invertir en fondos mutuos",
    "El impacto de la digitalización en el sector financiero",
    "Estrategias para maximizar los rendimientos de inversión",
    "La importancia de la planificación financiera a largo plazo",
    "Cómo evitar las trampas comunes en la inversión",
    "El papel del análisis técnico en el trading",
    "Cómo gestionar un portafolio de inversiones internacionales",
    "Consejos para la inversión en el sector tecnológico",
    "La evolución de los mercados de materias primas",
    "Cómo prepararse para una recesión económica"
]

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"finanzas");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}