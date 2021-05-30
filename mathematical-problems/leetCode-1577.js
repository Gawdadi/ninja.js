

const nums1 = [7,4];
const nums2 = [5,2,8,9];

var numTriplets = function() {
    const num1Squarred = getNumberSquares(nums1);
    const num2Squarred = getNumberSquares(nums2);

    return (getCount(nums1,num2Squarred) + getCount(nums2,num1Squarred)) 
}

function getNumberSquares(nums){
    const squareMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const square = nums[i]*nums[i]
        if(!squareMap.has(square)) squareMap.set(square , 0)
        squareMap.set(square,squareMap.get(square) + 1);
    }
    console.log(squareMap);
    return squareMap;
}

function getCount(arr,squareMap){
    let count = 0
    for (let i = 0; i < arr.length - 1; i++) {
        var j = i + 1;
        while(j < arr.length){
            const prod = arr[i] * arr[j];
            console.log(prod);
            if(squareMap.has(prod)) count +=  squareMap.get(prod)
            j++;
        }
    }
   return count
}

console.log(numTriplets())