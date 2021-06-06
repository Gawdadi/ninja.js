 // Binary search is only applicable for sorted arrays.
 // Assume that array in sorted in ascending order.
 // Its a divide and conquer method.
 // Applicable for sorted arrays because we need to find the median of an array.

 // Find element 22 using binary search;

const arr = [11,22,33,44,55,66,77,88,99]; // 10 elements
const element = 77;

 function binarySearch(start,end) {

    // If start is greater than end.
    // element not found.
    if(start > end) return 'Element not found'

    let middle = Math.ceil((start + end)/2)

    // If element found.
    if(arr[middle] == element) return middle;

    // Middle is greater than element.
    // start will be from left side.
    // End will me middle - 1;
    if(arr[middle] > element) return binarySearch(start,middle - 1);
      
     // Middle is less than element.
    // start will me middle + 1;
    // End will me from right side;
    if(arr[middle] < element) return binarySearch(middle + 1,end);
        
 }

 console.log(binarySearch(0,arr.length - 1))