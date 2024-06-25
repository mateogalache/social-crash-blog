import {  OpenAI } from 'openai';
import { listArticleTitles, saveTitlesToFile, storage } from '../configFireBase.js';


const openai = new OpenAI(
    {
        apiKey: process.env.MY_SECRET,
    }
);


export async function generateArticle(tema) {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ 
        role: "system", 
        content: `Haz un articulo sobre ${tema} de más de 1000 palabras. Hazlo en formato html siguiendo las siguiente instrucciones:
        1. Todo debe estar en este div: <div class='p-10 pb-16 flex flex-col gap-5 bg-gray-800 rounded-lg relative'>
        2. el titulo debe estar en <h1 class='text-2xl text-center'><strong>
        3. el texto normal lo pondrás en 'p' y los subitulos de los diferentes parrafos con strong.
        4. me gustaria que añadiese links si recomiendas algun producto si es el caso lo debes hacer de la siguiente manera, no es necesario ponerlos solo si en el articulo hablas de un producto:
        <nav class='w-full flex justify-center items-center'>
              <a href='link del producto' class='flex items-center justify-center rounded-md bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-blue-300'>
                <svg xmlns='http://www.w3.org/2000/svg' class='mr-2 h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'>
                  <path stroke-linecap='round' stroke-linejoin='round' d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
                Descubre nombre del producto
              </a>            
        </nav>
        En link del producto tienes que poner un link a donde se pueda comprar el producto recomendado ya sea en amazon o en otro sitio de compras, no es necesario poner productos recomendados solo si en el articulo se puede, si recomiendas un producto de amazon añade en el link tag=mxgxg-21 para que pueda hacer un seguimiento, este es un ejemplo de un link a amazon con el tag puesto: https://www.amazon.es/AZDelivery-Pantalla-77-Pulgadas-160-p%C3%ADxeles-Display/dp/B078JBBPXK/?_encoding=UTF8&tag=mxgxg-21&pd_rd_w=nuzsE&content-id=amzn1.sym.09eeb54b-ad82-4370-8c5a-83121b4384f3%3Aamzn1.symc.ecead27c-800a-401e-a631-4760610d717a&pf_rd_p=09eeb54b-ad82-4370-8c5a-83121b4384f3&pf_rd_r=KJKJH19EMQHQQ3X7DEBP&pd_rd_wg=DIcGE&pd_rd_r=cdc25476-10eb-4f2a-a654-355d6594d957&ref_=pd_hp_d_atf_ci_mcx_mr_hp_atf_m&th=1 . Para coger el link de la imagen copia de la direccion de la imagen del link que t pases de amazon. El producto debe tener relacion con el articulo escrito si no no lo pongas.
        Recuerda hacer el articulo de más de 1000 palabras, que sea un articulo de longitud media.`
      }]
  });
 
  console.log(response.choices[0]);
  const articleContent = response.choices[0].message.content; 

  // Extraer el título del contenido generado
  const titleMatch = articleContent.match(/<h1 class='text-2xl text-center'><strong>(.*?)<\/strong><\/h1>/);
  const articleTitle = titleMatch ? titleMatch[1] : 'Título no encontrado';

  const articleHtml = `
    <html>
    <head>
      <title>${articleTitle}</title>
      <link rel="stylesheet" href="/styles/global.css">
    </head>
    <body>
      ${articleContent}
    </body>
    </html>
  `;

  return {articleHtml,articleTitle};
}


async function uploadFileToFirebaseStorage(content, destination, contentType) {
  const file = storage.bucket().file(destination);
  await file.save(Buffer.from(content), {
    contentType: contentType,
  });
  console.log(`File uploaded to ${destination}`);
}

async function generateImage(prompt) {
  const response = await openai.images.generate({ model: "dall-e-3", prompt: prompt });
  const imageUrl = response.data[0].url;
  return imageUrl;
}

async function uploadImageFromUrlToFirebaseStorage(imageUrl, destination) {
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const file = storage.bucket().file(destination);
  await file.save(Buffer.from(buffer), {
    contentType: 'image/png',
  });
  console.log(`Image uploaded to ${destination}`); 
}
function formatDate(date) { 
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}


export async function generateAndUploadContent(tema,carpeta) {
  // Generar artículo
  const { articleHtml, articleTitle } = await generateArticle(tema);
  const date = new Date();
  const formattedDate = formatDate(date);
  
  // Quitar tildes del título del artículo
  const cleanTitle = articleTitle.replaceAll(' ', '-');
  
  // Subir artículo a Firebase Storage
  await uploadFileToFirebaseStorage(articleHtml, `articulos/${carpeta}/${formattedDate}-${cleanTitle}.html`, 'text/html');
  
  // Generar imagen
  const imagePrompt = `Una imagen realista de ${articleTitle}`;
  const imageUrl = await generateImage(imagePrompt);
  
  // Subir imagen a Firebase Storage
  await uploadImageFromUrlToFirebaseStorage(imageUrl, `images/${carpeta}/${formattedDate}-${cleanTitle}.png`);
}

