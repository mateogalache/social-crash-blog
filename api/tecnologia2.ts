import { generateAndUploadContent } from './generateArticles.js';


const temas = [
    "Vacunas Contra la Malaria",
    "Redes 5G",
    "Computación en el Borde",
    "Vehículos Autónomos",
    "Blockchain",
    "Vehículos Eléctricos",
    "Impresión 3D",
    "Realidad Virtual (VR)",
    "Realidad Aumentada (AR)",
    "Infraestructura de Control Cuántico",
    "Diagnósticos Médicos en Casa",
    "Entrenadores de XR",
    "Consultores de Salud Personalizada",
    "Ingeniería de Hardware Neuromórfico",
    "Pilotos Comerciales Espaciales",
    "Productores de Medios Sintéticos",
    "Diseñadores de Tecnología Usable",
    "Técnicos en Energía Renovable",
    "Analistas de Ciberseguridad",
    "Ingenieros de Gemelos Digitales", 
    "Especialistas en Tecnología Sostenible",
    "Ingeniería de Computación Cuántica",
    "Especialistas en Privacidad de Datos",
    "Desarrolladores de Realidad Virtual",
    "Diseñadores de Realidad Aumentada",
    "Arquitectos de Soluciones IoT",
    "Biólogos Genómicos",
    "Ingenieros de Vehículos Autónomos",
    "Desarrolladores de Blockchain",
    "Técnicos en Computación de Borde"
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