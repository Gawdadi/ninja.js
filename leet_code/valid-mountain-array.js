// Valid Mountain Array.

// const arr = [1,2,1]
// Output : true

// const arr = [1,2]
// Output : false

// const arr = [2,3,4,5]
// Output : false

// const arr = [0,1,2,1,2]
// Output : false

const arr = [1,2,3,2,1,0,0];
// Output : true

var validMountainArray = function() {

let len = arr.length;  i = 0; j = len - 1;

// If length is 1 or 2.
  if(len == 1 || len == 2) return false;

  while(i < len){

    // Number is repeated or array has no downward side of mountain.
      if(arr[i] == arr[i+1] || i + 1 == len) return false;

      if(arr[i] < arr[i+1])
      i++;
      else {
          break;
      }
  }

  // If array don't have upward side of mountain.
  if(i == 0) return false;

  while(j > i){

    // If an elemnt is repeated
      if(arr[j]== arr[j-1] ) return false;
      
      if(j == i+1) return true
      if(arr[j] < arr[j-1])
      j--;
      else {
          return false;
      }
  }
  return true
};

console.log(validMountainArray());