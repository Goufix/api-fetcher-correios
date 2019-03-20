module.exports = function parseCustomFloat(value, decimalSeparator = ',') {
  if (decimalSeparator === '.') {
    throw new Error('You should use the built in parseFloat');
  }

  return parseFloat(value.replace('.', '').replace(decimalSeparator, '.'));
};
