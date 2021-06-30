// Given a fixed length array arr of integers,
// duplicate each occurrence of zero,
// shifting the remaining elements to the right.

const arr = [1,0,2,3,0,4,5,0];
// Output : [ 1, 0, 0, 2, 3, 0, 0, 4 ]

var duplicateZeros = function() { 
    let i = 0,len = arr.length;
    while(i < arr.length){
        if(!arr[i]){
            // Replace i + 1 with zero and shift the array to right
            arr.splice(i+1,0,0);
            i++;
        }
        i++;
        arr.length  = len;
    }
    console.log(arr);
 };

 duplicateZeros();