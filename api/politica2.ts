import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Cómo los tratados internacionales están afectando el comercio global",
    "Las estrategias de política exterior de Rusia en 2024",
    "El papel de la diplomacia en la resolución de conflictos",
    "Las políticas de derechos humanos en el mundo actual",
    "El impacto de la urbanización en la política local",
    "Cómo las elecciones digitales están transformando la democracia",
    "El debate sobre la reforma policial en diferentes países",
    "El papel de la educación política en la formación de ciudadanos",
    "Las políticas de transporte y su impacto en el medio ambiente",
    "La relación entre la política y el desarrollo económico",
    "Cómo los líderes políticos están abordando la crisis de los refugiados",
    "El impacto de la corrupción en la confianza pública",
    "Las políticas de ciberseguridad en el mundo digital",
    "El futuro de la política monetaria en un entorno cambiante",
    "Cómo la política está influyendo en la innovación tecnológica",
    "El papel de los parlamentos en la gobernanza democrática",
    "Las estrategias de campaña en las elecciones de 2024",
    "El impacto de la política en la salud mental de la población",
    "Cómo las políticas agrarias están afectando a los agricultores",
    "El debate sobre la legalización del cannabis en diferentes países",
    "Las relaciones diplomáticas en el Medio Oriente: retos y avances",
    "El papel de la mujer en la política contemporánea",
    "Cómo los movimientos sociales están cambiando la política",
    "Las políticas de vivienda y su impacto en la sociedad",
    "El debate sobre el salario mínimo y su implementación",
    "Cómo las políticas de austeridad están afectando a las economías europeas",
    "Las estrategias para combatir el cambio climático desde la política",
    "El impacto de la inteligencia artificial en la política pública",
    "Las políticas de salud mental y su importancia en la sociedad",
    "Cómo la globalización está redefiniendo las fronteras políticas"
]

export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"politica");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}