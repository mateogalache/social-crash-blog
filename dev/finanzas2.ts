import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "Cómo utilizar las tarjetas de crédito de manera responsable",
  "Las tendencias emergentes en el mercado financiero",
  "Consejos para la planificación financiera a largo plazo",
  "El impacto de la inteligencia artificial en las finanzas",
  "Cómo invertir en fondos indexados",
  "Las mejores estrategias para el ahorro para la educación",
  "El papel de la economía colaborativa en las finanzas personales",
  "Cómo gestionar los riesgos en las inversiones",
  "Consejos para evitar el fraude financiero",
  "El impacto de la política en los mercados financieros",
  "Cómo elegir el mejor seguro para tu hogar",
  "Las mejores prácticas para la gestión de deudas",
  "El futuro de las pensiones y los planes de retiro",
  "Cómo invertir en startups y empresas emergentes",
  "Las mejores estrategias para la inversión en bonos",
  "Consejos para maximizar los rendimientos de inversión",
  "El impacto de la digitalización en el sector financiero",
  "Cómo evitar las trampas comunes en la inversión",
  "Las mejores técnicas para el análisis financiero",
  "El papel de los bancos centrales en la economía global",
  "Cómo gestionar un portafolio de inversiones internacionales",
  "Consejos para la inversión en el sector tecnológico",
  "Las mejores prácticas para el trading de acciones",
  "El impacto de la economía global en las finanzas personales",
  "Cómo preparar tus finanzas para una recesión",
  "Las mejores estrategias para el ahorro en tiempos de crisis",
  "El papel de las agencias de calificación crediticia",
  "Cómo invertir en bienes raíces comerciales",
  "Consejos para la gestión de las finanzas personales",
  "El impacto de la sostenibilidad en las inversiones",
  "Las mejores técnicas para la planificación financiera a corto plazo"
]

export async function generateFinanzas2 () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"finanzas");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}