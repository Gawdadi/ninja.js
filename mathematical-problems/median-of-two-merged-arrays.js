
const nums1 = [1,2,-3]
const nums2 = [-3,-2,-1]
var findMedianSortedArrays = function() {
    for(const num of nums2){
        nums1.push(num);
    }
    nums1.sort((a,b)=>a-b);
    const len = nums1.length
    if(len == 1) return nums1[0];

    const medianIndex = (len - 1)%2;
    if(!medianIndex) return nums1[(len - 1)/2];
        else {
            const index = Math.floor((len - 1)/2);
            return (nums1[index] + nums1[index + 1])/2;
        }
};

console.log(findMedianSortedArrays())