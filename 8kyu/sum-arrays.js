/*
Description:
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative. If the array is empty, return 0.
*/

function sumArrays(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log(sumArrays([1, 5.2, 4, 0, -1])); //Output: 9.2
