const fetch = require('isomorphic-unfetch');
const parseXML = require('./utils/parseXML');

module.exports = async function fetchData(url, fetchOptions = {}) {
  const body = await fetch(url, fetchOptions);
  const xml = await body.text();

  return parseXML(xml);
};
