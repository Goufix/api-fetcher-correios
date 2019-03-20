const generateUrl = require('./url');
const fetchData = require('./fetchData');
const states = require('../data/states.json');
const average = require('./utils/average');
const parseCustomFloat = require('./utils/parseCustomFloat');

async function main() {
  for (const [stateKey, cepList] of Object.entries(states)) {
    let sedex = [];
    let pac = [];
    for (const [index, cep] of cepList.entries()) {
      console.log(
        `Carregando CEP ${index + 1}/${cepList.length} do estado ${stateKey}.`
      );

      const data = await fetchData(
        generateUrl({ sCepOrigem: '80020310', sCepDestino: cep })
      );
      const JSONCutoff = data.Servicos.cServico;
      console.log(
        'SEDEX: ',
        JSONCutoff[0].Valor,
        '\nPAC: ',
        JSONCutoff[1].Valor
      );
      sedex.push(parseCustomFloat(JSONCutoff[0].Valor[0]));
      pac.push(parseCustomFloat(JSONCutoff[1].Valor[0]));
    }
    console.log(
      `Média SEDEX ${stateKey}: `,
      [average(sedex)],
      `\n Média PAC ${stateKey}: `,
      [average(pac)]
    );
  }
  console.log(`${'='.repeat(15)}DONE${'='.repeat(15)}`);
}

main().catch((error) => {
  console.log('Whoops! Parece que tivemos um erro:');
  console.error(error);
});
