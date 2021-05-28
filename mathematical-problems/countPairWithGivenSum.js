// Given an array of integers, and a number ‘sum’,
// find the number of pairs of integers in the array whose sum is equal to ‘sum’.

// Example
const arr = [1, 5, 7, -1];
const sum = 6;
// Output :  2
// Pairs with sum 6 are (1, 5) and (7, -1);

function calculate() {
    const obj = {};
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        const num = arr[i];
            if(obj[sum - num] != null){
                count++;
            }
        obj[num] = i;
    }
   return count;
}

console.log(calculate());