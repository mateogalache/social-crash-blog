import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Cómo la moda está abrazando la diversidad e inclusión",
    "Las prendas de denim que no pueden faltar en tu armario",
    "Cómo seguir las tendencias sin gastar una fortuna",
    "Los mejores looks casuales para el fin de semana",
    "La evolución de los trajes de baño a lo largo de las décadas",
    "Consejos para usar colores neón de manera chic",
    "Los estilos de peinados más populares para esta temporada",
    "Cómo elegir la ropa adecuada para tu tipo de cuerpo",
    "El impacto de la moda rápida en el medio ambiente",
    "Las mejores tiendas vintage y de segunda mano",
    "Cómo adaptar las tendencias de pasarela a la vida diaria",
    "Los accesorios de joyería que están en tendencia",
    "Consejos para vestirse de manera adecuada en bodas",
    "Cómo los influencers están cambiando la industria de la moda",
    "Las tendencias de maquillaje que complementan tu estilo",
    "El auge de las marcas de moda independientes",
    "Cómo usar capas para crear looks interesantes",
    "Los mejores trucos para comprar ropa en línea",
    "Cómo llevar los colores pastel esta temporada",
    "La influencia de la cultura pop en la moda",
    "Consejos para una apariencia sofisticada con prendas básicas",
    "Las tendencias de moda masculina para el 2024",
    "Cómo reciclar y reutilizar ropa antigua",
    "El futuro de la moda digital y los desfiles virtuales",
    "Consejos para elegir la ropa adecuada para viajar",
    "Cómo combinar ropa de diseñador con prendas accesibles",
    "El impacto de la sostenibilidad en las nuevas colecciones",
    "Las mejores marcas de moda sostenible que debes conocer",
    "Cómo crear looks monocromáticos elegantes",
    "La importancia de la moda inclusiva en la sociedad actual"
]
export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"moda");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}