/*
Description:
Given a sequence of numbers, find the largest pair sum in the sequence.
*/

function largestPairSum(numbers) {
  let highest = Math.max(...numbers);
  let index = numbers.indexOf(highest);
  numbers.splice(index, 1);
  let secondHighest = Math.max(...numbers);
  return highest + secondHighest;
}

console.log(largestPairSum([10, 14, 2, 23, 19])); // Output: 42
console.log(largestPairSum([99, 2, 2, 23, 19])); // Output: 122
