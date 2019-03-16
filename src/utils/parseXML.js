var { parseString } = require('xml2js');

module.exports = function parseXML(xml, options = {}) {
  return new Promise((resolve, reject) => {
    parseString(xml, options, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
