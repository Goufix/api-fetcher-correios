const generateUrl = require('./url');
const fetchData = require('./fetchData');
const states = require('../data/states.json');
const average = require('./utils/average');
const parseCustomFloat = require('./utils/parseCustomFloat');

async function main() {
  for (const [stateKey, cepList] of Object.entries(states)) {
    let sedexValues = [];
    let pacValues = [];
    
    for (const [index, cep] of cepList.entries()) {
      console.log(
        `Carregando CEP ${index + 1}/${cepList.length} do estado ${stateKey}.`
      );

      const { Servicos: { cServico } } = await fetchData(
        generateUrl({ sCepOrigem: '80020310', sCepDestino: cep })
      );
      
      const sedex = cServico[1].Valor
      const pac = cServico[1].Valor
      
      console.log(`Sedex: ${sedex} | Pac: ${pac}`)
      sedexValues.push(parseCustomFloat(sedex));
      pacValues.push(parseCustomFloat(pac));
    }
    
    console.log('Média Sedex:', average(sedexValues))
    console.log('Média Pac:', average(pacValues))
  }
  
  console.log(`${'='.repeat(15)} DONE ${'='.repeat(15)}`);
}

main().catch((error) => {
  console.log('Whoops! Parece que tivemos um erro:');
  console.error(error);
});
