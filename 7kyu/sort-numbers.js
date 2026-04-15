/*
Description:
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
*/

function solution(nums) {
  if (nums == [] || nums == null) {
    return [];
  } else {
    return nums.sort((a, b) => a - b);
  }
}

console.log(solution([1, 2, 10, 50, 5])); // Output: [ 1, 2, 5, 10, 50 ]
