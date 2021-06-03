// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.

var nums = [1,1,1,1,1,2,2,2,2,5,6,7,8,8,8];

// Output = [ 1, 2, 5, 6, 7, 8 ];
var uniq = function() {
    var i = 0;
    while(i < nums.length){
        const index = nums.indexOf(nums[i]);
        
        if(index > -1 && index !== i)  nums.splice(index,1);
            else {
             i++;
        }
    }
    return nums;
};

console.log(uniq());