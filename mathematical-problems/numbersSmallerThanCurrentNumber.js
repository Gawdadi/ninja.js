 // How Many Numbers Are Smaller Than the Current Number
 
 // const nums =[7,7,7,7]
// Output :[1,1,1,1,]

const nums = [8,1,2,2,3]
// Output :[4,0,1,1,3]

 var smallerNumbersThanCurrent = function() {
     let numsArr = [];
    var arr = sort(nums,nums.length);
         for(i = 0; i < nums.length; i++){
             numsArr.push(arr.indexOf(nums[i]));
         }  
     return numsArr;

    // Alternate by using js inbuilt methods.
    // Takes less time and memory.

   // const sorted = [...nums].sort((a, b) => a - b);
   // return nums.map(num => sorted.indexOf(num));
     
 };
 
 /**
  * 
  * @param {number[]} nums 
  * @param {number} nums.length 
  * @returns {number} sorted array in ascending order
  */

 function sort(array,length){
     var arr = Object.assign([],array);
     var temp;
     if(length == 1){
         return arr
     }
     for(i = 0; i < length; i++){
        if(arr[i] > arr[i+1]){
             temp = arr[i+1];
             arr[i+1] = arr[i];
             arr[i] = temp;
         }
     }
     return sort(arr,length-1);
 }

 console.log(smallerNumbersThanCurrent())