const DATA = [83308390, 99885000, 99885000, 96450970];

const fetch = require("isomorphic-unfetch");
const parseString = require("xml2js").parseString;
const querystring = require("querystring");

const params = {
  nCdEmpresa: "",
  sDsSenha: "",
  sCepOrigem: "80020310",
  sCepDestino: "87309505",
  nVlPeso: "1",
  nCdFormato: "1",
  nVlComprimento: "16",
  nVlAltura: "11",
  nVlLargura: "14",
  nVlDiametro: "0",
  sCdMaoPropria: "n",
  nVlValorDeclarado: "0",
  sCdAvisoRecebimento: "n",
  StrRetorno: "xml",
  nCdServico: "40010,41106"
};

let url = "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx/CalcPreco";

function generateURL(baseUrl, params) {
  return `${baseUrl}?${querystring.stringify(params)}`;
}

url = generateURL(url, params);
console.log(url);

fetch(url).then(r =>
  parseString(r, (err, result) => {
    console.log(result);
  })
);
