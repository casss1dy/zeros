module.exports = function zeros(expression) {
  let step = 1,
    fiveCount = 0,
    twoCount = 0;

  let arFactorial = expression.split('*');

  arFactorial.forEach(function(item){
    step = item.includes('!!') ? 2 : 1;
    item = +item.replace(/!+/, '');

    while (item > 1) {
      fiveCount += countMultiply(item, 5);
      twoCount += countMultiply(item, 2);
      item -= step;
    }
  });

  if (fiveCount - twoCount > 0) return twoCount;
  else return fiveCount;
}

function countMultiply(num, multiply) {
  let count = 0;
  let res = num;
  while (res >= multiply) {
    if (res % multiply) break;
    res /= multiply;
    count++;
  }
  return count;
}
