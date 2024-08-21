import type { Handler, HandlerEvent, HandlerContext, Context } from "@netlify/functions";

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

  const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;

  if ( !myImportantVariable ) {
    throw 'Missing MY_IMPORTANT_VARIABLE';
  }

  console.log('Hola Mundo desde los logs');

  return {
    statusCode: 200,
    body: JSON.stringify({
      myImportantVariable,
    }),
    headers: {
      'Content-Type':'application/json'
    }
  }
};


// export default async (req: Request, context: Context) => {
//   const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;

//   if (!myImportantVariable) {
//     throw 'Missing MY_IMPORTANT_VARIABLE';
//   }
//   return new Response(myImportantVariable)
// }