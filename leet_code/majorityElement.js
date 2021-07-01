/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1, 2, 1];
var majorityElement = function () {
  let maxNum,
    count = 1,
    i = 0,
    numsMap = new Map();

  if (nums.length === 1) return nums[0];
  while (i < nums.length) {
    if (!numsMap.has(nums[i])) numsMap.set(nums[i], 1);
    else {
      numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
      if (count < numsMap.get(nums[i])) {
        maxNum = nums[i];
        count = numsMap.get(nums[i]);
      }
    }
    i++;
  }
  return maxNum;
};

console.log(majorityElement());
