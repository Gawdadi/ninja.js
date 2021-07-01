/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function (num) {
  let rem,
    sum = 0;

  while (num) {
    rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }

  if (Math.floor(sum / 10)) {
    return addDigits(sum);
  }
  return sum;
};

console.log(addDigits(1213232));
