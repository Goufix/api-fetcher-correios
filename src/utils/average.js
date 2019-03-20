module.exports = function average(items) {
  return items.reduce((p, c) => p + c, 0) / items.length;
};
