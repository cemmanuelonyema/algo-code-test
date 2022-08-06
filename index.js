/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2, 7, 11, 15];

const twoSum = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    const num2 = target - num1;

    if (map.has(num2)) {
      //   return [map.get(num2), i]; // return keys (indices)
      return [nums[map.get(num2)], nums[i]]; //return the values
    }

    map.set(num1, i);
  }
};

/////////////
/*
test;

const testNums = [2, 4, 10, 5, 15, 7, 11]; //25
const res = twoSum(testNums, 25);
console.log(res); // [10,15]values || [2, 4] indices
*/
