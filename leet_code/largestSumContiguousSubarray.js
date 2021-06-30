// Array of negative numbers
// const arr = [-9, -6, 1, 1, 1, -5, -3];
// const len = arr.length;
// Sum : -1 
// satrt : 2 , end : 2


// const arr = [-9, -6, 1, 1, 1, -5, -3];
// const len = arr.length;
// Sum : 3
// satrt : 2 , end : 2


const arr = [-9, 6, -1, 1, 1, -5, 3];
const len = arr.length;
// Sum : 17
// satrt : 0 , end : 5

function findHighestSum() {
    let start = 0;
    let end = 0;
    let maxSoFar = 0;
    let currMax = 0;

    // If every number in array is negative.
    let allNegative = true;
    let highNegativeSofar = -1;

    for(i = 0; i < len; i++) {
        currMax = currMax + arr[i];
        if(currMax > maxSoFar){
            maxSoFar = currMax;
            end = i;
            start = start;
        } 
        if(currMax < 0){
            currMax = 0;
            start = i + 1;
        }

        // If array contains a positive number,
        // then mark allNegative false.
        if(arr[i] > 0){
            allNegative = false; 
        }

         // Get highest negative number,
         // if array has only negative numbers.
        if(allNegative){
            if(highNegativeSofar < arr[i]){
                highNegativeSofar = arr[i]
               }
        }
    }

    // start, end of highest negative number. 
    if(allNegative){
        start = end = arr.indexOf(highNegativeSofar);
    }
    return (['Sum : ' + maxSoFar,'Start : ' + start,'End : ' + end])
}

console.log(findHighestSum());