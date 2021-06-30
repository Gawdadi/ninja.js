let num = -10;

function isPalindrome() {
  let arr = [];
  let i = 0;
  let flag = true;

  while (num > 0) {
    rem = num % 10;
    console.log(rem);
    arr.push(Number(rem));
    num = Math.floor(num / 10);
  }
  if (!arr.length) {
    flag = false;
    return flag;
  }
  while (i < arr.length) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      flag = false;
      return flag;
    }
    i++;
  }
  return flag;
}

console.log(isPalindrome());
