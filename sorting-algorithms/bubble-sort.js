// Sorts an array by swapping adjacent elements.
// Largest element is moved to the one by one.

function bubbleSort(arr){
    let len = arr.length;
    for(i = 0; i < len; i++) {
        for(j = 0; j < len - i; j++) {
            let firstElem = arr[j];
            let secondElem = arr[j+1];
            if(arr[j+1] < arr[j]) {
                arr[j+1] = firstElem;
                arr[j] = secondElem;
            }
        }
        // Print all swapped arrays;
        // console.log(arr);
    }
    return arr;
}

// Example
// const arr = [4,1,5,6,4,3,2,-1,-2,99];
// console.log(bubbleSort(arr));
// Output : [ -2, -1, 1, 2, 3, 4, 4, 5, 6, 99 ]