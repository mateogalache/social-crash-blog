import {  OpenAI } from 'openai';
import { listArticleTitles, saveTitlesToFile, storage } from '../configFireBase.js';


const openai = new OpenAI(
    {
        apiKey: process.env.MY_SECRET,
    }
);

const orden = [
    "primer",
    "segundo",
    "tercer",
    "cuarto",
    "quinto",
    "sexto",
    "séptimo",
    "octavo",
    "noveno",
    "décimo"
]

async function generateArticle(orden) {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ 
          role: "system", 
          content: `Haz un articulo del ${orden} tema tecnológico más importante de hoy. Hazlo en formato html siguiendo las siguiente instrucciones:
          1. Todo debe estar en este div: <div class='p-10 pb-16 flex flex-col gap-5 bg-gray-800 rounded-lg relative'>
          2. el titulo debe estar en <h1 class='text-2xl text-center'><strong>
          3. el texto normal lo pondrás en 'p' y los subitulos de los diferentes parrafos con strong.
          4. me gustaria que añadiese links si recomiendas algun producto si es el caso lo debes hacer de la siguiente manera:
          <nav class='w-full flex justify-center items-center'>
            <div class='relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-black-100 bg-white shadow-md justify-center'>
              <a class='relative mx-3 mt-3 flex justify-center h-60 overflow-hidden rounded-xl' href='link al producto'>
                <img class='object-cover' src='link de la imagen del producto' alt='product image' />
              </a>
              <div class='mt-4 px-5 pb-5'>
                <a href='link del producto' class='flex items-center justify-center rounded-md bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-blue-300'>
                  <svg xmlns='http://www.w3.org/2000/svg' class='mr-2 h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
                  </svg>
                  Descubre nombre del producto
                </a>
              </div>
            </div>
          </nav>
          En link del producto tienes que poner un link a donde se pueda comprar el producto recomendado ya sea en amazon o en otro sitio de compras, no es necesario poner productos recomendados solo si en el articulo se puede, si recomiendas un producto de amazon añade en el link tag=mxgxg-21 para que pueda hacer un seguimiento, este es un ejemplo de un link a amazon con el tag puesto: https://www.amazon.es/AZDelivery-Pantalla-77-Pulgadas-160-p%C3%ADxeles-Display/dp/B078JBBPXK/?_encoding=UTF8&tag=mxgxg-21&pd_rd_w=nuzsE&content-id=amzn1.sym.09eeb54b-ad82-4370-8c5a-83121b4384f3%3Aamzn1.symc.ecead27c-800a-401e-a631-4760610d717a&pf_rd_p=09eeb54b-ad82-4370-8c5a-83121b4384f3&pf_rd_r=KJKJH19EMQHQQ3X7DEBP&pd_rd_wg=DIcGE&pd_rd_r=cdc25476-10eb-4f2a-a654-355d6594d957&ref_=pd_hp_d_atf_ci_mcx_mr_hp_atf_m&th=1 . Para coger el link de la imagen copia de la direccion de la imagen del link que t pases de amazon. El producto debe tener relacion con el articulo escrito si no no lo pongas.`
      }]
    });

  console.log(response.choices[0]);
  const articleContent = response.choices[0].message.content;

  const articleHtml = `
    <html>
    <head>
      <title>Construir tu Marca Personal en Redes Sociales</title>
      <link rel="stylesheet" href="/styles/global.css">
    </head>
    <body>
      ${articleContent}
    </body>
    </html>
  `;

  return articleHtml;
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
  const imageUrl = response.data;
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
export async function generateAndUploadContent() {

    for (var i = 0;i<1;i++)
    {
        // Generar artículo
        const articleHtml = await generateArticle(orden[i]);
        const date = new Date();
        const formattedDate = formatDate(date);
        // Subir artículo a Firebase Storage
        await uploadFileToFirebaseStorage(articleHtml, `articulos/article-${orden[i]}-${formattedDate}.html`, 'text/html');
    }

  // Generar imagen
  //const imagePrompt = 'Una imagen que represente la construcción de una marca personal en redes sociales';
  //const imageUrl = await generateImage(imagePrompt);

  // Subir imagen a Firebase Storage
  //await uploadImageFromUrlToFirebaseStorage(imageUrl, 'images/brand_personal.png');
}
