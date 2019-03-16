const querystring = require('querystring');

const defaultParams = {
  nVlPeso: '1',
  nCdFormato: '1',
  nVlComprimento: '16',
  nVlAltura: '11',
  nVlLargura: '14',
  nVlDiametro: '0',
  sCdMaoPropria: 'n',
  nVlValorDeclarado: '0',
  sCdAvisoRecebimento: 'n',
  StrRetorno: 'xml',
  nCdServico: '40010,41106'
};

const url =
  'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx/CalcPreco';

module.exports = function generateUrl(overrideParams = {}) {
  // Funde o objeto de parâmetros padrão com os parâmetros passados como
  // argumento para essa função. Caso haja uma propriedade conflitante, ela irá
  // sobrescrever a propriedade já existente no objeto padrão.
  const params = { ...defaultParams, ...overrideParams };

  return `${url}?${querystring.stringify(params)}`;
};
