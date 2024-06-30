import { generateAndUploadContent } from './generateArticles.js';


const temas =  [
  "Cómo invertir en criptomonedas de manera segura",
  "Las mejores estrategias para el ahorro a largo plazo",
  "El impacto de la inflación en las inversiones",
  "Consejos para diversificar tu portafolio de inversión",
  "Cómo planificar la jubilación de manera efectiva",
  "Las tendencias en el mercado inmobiliario en 2024",
  "El papel de la tecnología en la gestión financiera",
  "Cómo reducir tus deudas de manera eficiente",
  "Consejos para la declaración de impuestos en 2024",
  "El impacto de las políticas fiscales en la economía personal",
  "Cómo elegir el mejor plan de pensiones",
  "Las mejores prácticas para el trading de criptomonedas",
  "El futuro de las inversiones en energías renovables",
  "Cómo proteger tu patrimonio en tiempos de crisis",
  "Consejos para mejorar tu puntaje crediticio",
  "El impacto de las tasas de interés en las hipotecas",
  "Cómo elegir el mejor fondo de inversión",
  "Las mejores estrategias para generar ingresos pasivos",
  "El papel de la educación financiera en la estabilidad económica",
  "Cómo invertir en el mercado de divisas",
  "Consejos para la compra y venta de propiedades",
  "El impacto de la globalización en las finanzas personales",
  "Cómo manejar las finanzas de un negocio pequeño",
  "Las mejores prácticas para el ahorro diario",
  "El papel de las fintech en la democratización de las finanzas",
  "Cómo preparar un presupuesto familiar",
  "Consejos para la inversión en el mercado bursátil",
  "El impacto de las políticas monetarias en la economía global",
  "Cómo proteger tus inversiones de la volatilidad del mercado",
  "Las mejores estrategias para la inversión a corto plazo",
  "El papel de los asesores financieros en la gestión de patrimonio"
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