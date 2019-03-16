const generateUrl = require('./url');
const fetchData = require('./fetchData');

async function main() {
  // Definir aqui os parâmetros que forem necessários para
  // a cotação atual
  const url = generateUrl({
    sCepOrigem: '80020310',
    sCepDestino: '87309505'
  });

  const data = await fetchData(url);

  // Seja feliz. :)
  console.log(data);
}

main().catch((error) => {
  console.log('Whoops! Parece que tivemos um erro:');
  console.error(error);
});
