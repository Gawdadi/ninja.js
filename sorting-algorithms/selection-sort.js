// Selection sorts an array by finding minimum element in an array(if you want sorted array in ascending order)
// and put that element at the beginning.

function selectionSort(arr){
let minIndex,
    temp;
const len = arr.length;
    for(i = 0; i < len; i++) {
        minIndex = i;
        for(j = i + 1; j < len; j++){
            if(arr[j] < arr[minIndex]){
              minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}


// Example
// const arr = [22,45,11,9,12,44,-1,-3,-4];
// console.log(selectionSort(arr));
// Output : [ -4, -3, -1, 9, 11, 12, 22, 44, 45 ]