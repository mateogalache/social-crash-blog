import { generateAndUploadContent } from './generateArticles.js';


const temas = [
      "Inteligencia Artificial Generativa (Gen-AI)",
      "Computación Cuántica",
      "Energía Verde",
      "Tecnologías Portátiles de Salud",
      "Realidad Extendida (XR)",
      "Tecnología Activada por Voz",
      "Turismo Espacial",
      "Medios Sintéticos",
      "Robótica Avanzada",
      "AI en Ciberseguridad",
      "Gemelos Digitales",
      "Tecnología Sostenible",
      "Telemedicina",
      "Nanotecnología",
      "Apple Vision Pro",
      "Baterías Térmicas",
      "Editores de Genes",
      "Computadoras Exascale",
      "Auracast",
      "Gadgets de IA",
      "E-Ink Personalizable",
      "Anillos Inteligentes",
      "Auriculares Neurales",
      "ChatGPT en Dispositivos",
      "Sistemas Geotérmicos Mejorados",
      "Chiplets",
      "Tecnología para Perder Peso",
      "Seguimiento de Variantes de COVID",
      "Inicio de Sesión sin Contraseña",
      "Generación de Proteínas por IA"
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
