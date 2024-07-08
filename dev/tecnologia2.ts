import { generateAndUploadContent } from '../api/generateArticles.js';


const temas = [
  "El papel de la tecnología en la transformación digital",
  "Cómo los dispositivos inteligentes están mejorando nuestros hogares",
  "Las últimas innovaciones en la tecnología wearable",
  "El impacto de la tecnología en la movilidad urbana",
  "Cómo los avances en la biotecnología están cambiando la medicina",
  "Las mejores plataformas de e-learning",
  "El futuro de la tecnología de impresión 3D",
  "Cómo la tecnología está transformando la logística y el transporte",
  "Las tendencias en la tecnología de la inteligencia artificial",
  "El impacto de la tecnología en la industria musical",
  "Cómo los dispositivos móviles están evolucionando",
  "Las mejores herramientas para la programación y el desarrollo",
  "El papel de la tecnología en la gestión de datos",
  "Cómo los avances en la tecnología espacial están abriendo nuevas fronteras",
  "Las innovaciones en la tecnología de los vehículos eléctricos",
  "El impacto de la tecnología en el mundo del deporte",
  "Cómo los videojuegos están impulsando la innovación tecnológica",
  "Las mejores aplicaciones para la comunicación empresarial",
  "El futuro de la realidad mixta en el entretenimiento",
  "Cómo la tecnología está mejorando la accesibilidad",
  "Las innovaciones en la tecnología de los sistemas operativos",
  "El impacto de la tecnología en el sector financiero",
  "Cómo la inteligencia artificial está cambiando la atención al cliente",
  "Las mejores plataformas de redes sociales en 2024",
  "El papel de la tecnología en la protección del medio ambiente",
  "Cómo la tecnología está transformando la industria cinematográfica",
  "Las innovaciones en la tecnología de los materiales",
  "El impacto de la tecnología en la seguridad nacional",
  "Cómo la tecnología está cambiando el marketing digital",
  "Las mejores herramientas para la gestión de proyectos",
  "El futuro de la computación cuántica"
]


export default async function handler () { 
  const date = new Date();
  const day = date.getDate();
  try {
    await generateAndUploadContent(temas[day - 1],"tecnologia");
    console.log('Artículo e imagen generados y subidos a Firebase Storage.');
  } catch (error) {
    console.error('Error al generar y subir el contenido:', error);
  }
}