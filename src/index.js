const generateUrl = require('./url');
const fetchData = require('./fetchData');
const dataLoop = require('./dataLoop');
const states = require('../data/states.json');

async function main() {
  // Definir aqui os parâmetros que forem necessários para
  // a cotação atual
  const url = generateUrl({
    sCepOrigem: '80020310',
    sCepDestino: '87309505'
  });

  for (let [stateKey, cepList] of Object.entries(states)) {
    for (let [index, cep] of cepList.entries()) {
      console.log(
        `Carregando CEP ${index + 1}/${cepList.length} do estado ${stateKey}`
      );

      const data = await fetchData(
        generateUrl({ sCepOrigem: '80020310', sCepDestino: cep })
      );

      console.log(
        data.Servicos.cServico[0].Valor,
        data.Servicos.cServico[1].Valor
      );
    }
  }
}

main().catch((error) => {
  console.log('Whoops! Parece que tivemos um erro:');
  console.error(error);
});
