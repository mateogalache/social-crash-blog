import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "Las películas de terror más esperadas de 2024",
    "Cómo el terror psicológico está evolucionando en el cine",
    "Los mejores libros de terror que debes leer este año",
    "El impacto de los clásicos del cine de terror en la cultura pop",
    "Las series de televisión de terror más escalofriantes",
    "Cómo los videojuegos de terror están revolucionando el género",
    "Los mitos urbanos más aterradores y sus orígenes",
    "El papel de la música en las películas de terror",
    "Los mejores directores de cine de terror de todos los tiempos",
    "Cómo el cine de terror está abordando temas sociales",
    "Las casas embrujadas más famosas del mundo",
    "El impacto de las historias de terror en la literatura juvenil",
    "Las leyendas de terror más aterradoras de América Latina",
    "Cómo los efectos especiales están cambiando el cine de terror",
    "Los monstruos más icónicos del cine de terror",
    "El auge del terror en el cine independiente",
    "Las mejores películas de terror basadas en hechos reales",
    "El papel del sonido en la creación de una atmósfera de terror",
    "Los personajes de terror más memorables de la historia del cine",
    "Cómo las series de terror están captando nuevas audiencias",
    "Los mejores cortometrajes de terror que debes ver",
    "El impacto de la tecnología en la creación de películas de terror",
    "Las historias de terror más aterradoras de la web",
    "Cómo los festivales de cine de terror están ganando popularidad",
    "Las mejores películas de terror de culto",
    "El impacto del terror en la cultura del cómic",
    "Los villanos más aterradores del cine de terror",
    "Cómo el terror japonés está influyendo en el cine occidental",
    "Las mejores películas de terror psicológico",
    "El papel de la iluminación en las películas de terror",
    "Los mejores remakes de películas de terror clásicas"
]


export async function generateTerror () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"terror");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}