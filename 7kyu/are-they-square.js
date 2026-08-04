/*
Description:
Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.
*/

var isSquare = function (arr) {
  const squared = arr.every((num) => Number.isInteger(Math.sqrt(num)));

  if (arr.length === 0) {
    return undefined;
  } else if (squared) {
    return true;
  } else {
    return false;
  }
};

console.log(isSquare([1, 4, 9, 16])); // Output: true
console.log(isSquare([3, 4, 7, 9])); // Output: false
console.log(isSquare([])); // Output: undefined
