/**
 * @param {number[]} arr
 * @return {number[]}
 */

 const arr = [17,18,5,4,6,11,22]

 var replaceElements = function() {
    let len = arr.length,numbers =[];
    if(len==1) return [-1];
    for(let i = 0; i < len - 1; i++){
        let j = i + 1;
        let currMax = arr[j];
        while(j < len ) {
            currMax = Math.max(currMax,arr[j]);
            j++;
        }
     numbers.push(currMax)
    }
    numbers.push(-1)
    return numbers;
};

console.log(replaceElements())