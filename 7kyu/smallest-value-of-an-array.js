/*
Description:
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.


*/

function min(arr, toReturn) {
  let value = Math.min(...arr);
  let index = arr.indexOf(value);

  return toReturn === "value" ? value : index;
}

console.log(min(([1, 2, 3, 4, 5], "value"))); // Output: 1
