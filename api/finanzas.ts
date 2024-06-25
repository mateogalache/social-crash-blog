import { generateAndUploadContent } from './generateArticles.js';


const temas =  [
    "Estrategias de inversión para principiantes en 2024",
    "Cómo construir un portafolio de inversión diversificado",
    "El impacto de las criptomonedas en el mercado financiero",
    "Consejos para la planificación de la jubilación",
    "Cómo gestionar la deuda personal de manera efectiva",
    "Las mejores aplicaciones para el control de finanzas personales",
    "La importancia del ahorro para emergencias",
    "Cómo el cambio climático está afectando las inversiones",
    "Estrategias para invertir en el mercado inmobiliario",
    "El papel de la inteligencia artificial en las finanzas",
    "Cómo interpretar los indicadores económicos clave",
    "El futuro del trabajo y su impacto en las finanzas personales",
    "Cómo reducir los gastos y aumentar el ahorro",
    "El impacto de las políticas monetarias en la economía global",
    "Consejos para la declaración de impuestos",
    "Cómo proteger tus inversiones en tiempos de incertidumbre",
    "El papel de los asesores financieros en la gestión de patrimonio",
    "Las tendencias del mercado bursátil en 2024",
    "Cómo invertir en fondos indexados",
    "La importancia de la educación financiera desde temprana edad",
    "Estrategias para generar ingresos pasivos",
    "El impacto de las tasas de interés en las hipotecas",
    "Cómo utilizar las tarjetas de crédito de manera responsable",
    "El auge de la inversión sostenible",
    "Consejos para emprendedores que buscan financiamiento",
    "Cómo preparar un presupuesto familiar efectivo",
    "El papel de las fintech en la democratización de las finanzas",
    "Las mejores prácticas para el trading de acciones",
    "Cómo planificar financieramente para la educación universitaria",
    "El impacto de la globalización en los mercados financieros"
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