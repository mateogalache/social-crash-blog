import { generateAndUploadContent } from './generateArticles.js';


const temas =  [
  "El impacto de la inteligencia artificial en la vida cotidiana",
  "Cómo los coches autónomos están revolucionando el transporte",
  "Las últimas innovaciones en la tecnología 5G",
  "El futuro de la realidad virtual y aumentada",
  "Cómo los robots están cambiando la industria",
  "Las mejores aplicaciones para mejorar la productividad",
  "El impacto de la tecnología blockchain en la seguridad",
  "Cómo la tecnología está transformando la educación",
  "Las tendencias tecnológicas más importantes de 2024",
  "Cómo los asistentes virtuales están mejorando nuestras vidas",
  "El papel de la tecnología en la salud moderna",
  "Cómo los dispositivos IoT están conectando el mundo",
  "Las mejores startups tecnológicas del año",
  "El impacto de la ciberseguridad en las empresas",
  "Cómo la tecnología está cambiando el comercio minorista",
  "Las mejores herramientas de colaboración en línea",
  "El futuro de la inteligencia artificial en el trabajo",
  "Cómo los drones están transformando diferentes industrias",
  "Las innovaciones en la tecnología de baterías",
  "El papel de la tecnología en la sostenibilidad ambiental",
  "Cómo los pagos digitales están cambiando la economía",
  "Las mejores aplicaciones de fitness y salud",
  "El impacto de la tecnología en la privacidad personal",
  "Cómo la tecnología está mejorando la agricultura",
  "Las tendencias en la tecnología de la nube",
  "El futuro de la tecnología de reconocimiento facial",
  "Cómo la tecnología está ayudando a combatir el cambio climático",
  "Las innovaciones en la tecnología de almacenamiento de datos",
  "El impacto de la inteligencia artificial en la creatividad",
  "Cómo la tecnología está revolucionando la industria del entretenimiento",
  "Las mejores aplicaciones para la gestión financiera personal"
];


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
