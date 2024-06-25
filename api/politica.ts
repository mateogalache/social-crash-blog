import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "El impacto de las elecciones en la economía global",
    "Las políticas de inmigración más debatidas en 2024",
    "El papel de las redes sociales en las campañas electorales",
    "Cómo la política exterior está moldeando las relaciones internacionales",
    "El ascenso de los movimientos populistas en Europa",
    "Las reformas educativas propuestas por el nuevo gobierno",
    "El impacto de las políticas ambientales en el cambio climático",
    "Cómo la desinformación está afectando la democracia",
    "El papel de los jóvenes en la política actual",
    "La influencia del lobby en la toma de decisiones políticas",
    "Las políticas de salud pública en tiempos de pandemia",
    "El futuro de la Unión Europea tras el Brexit",
    "Cómo la tecnología está cambiando el panorama político",
    "Las tensiones geopolíticas en Asia: análisis y perspectivas",
    "El papel de la ONU en la resolución de conflictos internacionales",
    "Las políticas de igualdad de género y su impacto",
    "El debate sobre el control de armas en Estados Unidos",
    "El futuro de la OTAN en un mundo cambiante",
    "La influencia de los medios de comunicación en la opinión pública",
    "Las políticas fiscales y su impacto en la economía",
    "El papel de la sociedad civil en la política moderna",
    "Las elecciones en América Latina: retos y oportunidades",
    "El impacto de la globalización en la política nacional",
    "Las relaciones bilaterales entre China y Estados Unidos",
    "Cómo las sanciones económicas están moldeando la política internacional",
    "El debate sobre la privacidad y la vigilancia gubernamental",
    "Las políticas de energía renovable y su implementación",
    "El papel de las organizaciones no gubernamentales en la política global",
    "La evolución de los partidos políticos tradicionales",
    "El impacto del cambio climático en la política agrícola"
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