// multiply-the-strings-in-the-array.js

/*
You received an array with two strings.
Create a function that will return their product as a string.
*/

function arrMultiply(arr) {
  let numArr = [];

  for (let i = 0; i < arr.length; i++) {
    numArr.push(Number(arr[i]));
  }
  let result = numArr.reduce((acc, curr) => acc * curr);
  return result.toString();
}
console.log(arrMultiply(["3", "5"])); // Output: '15'
console.log(arrMultiply(["2", "-3"])); // Output: '-6'
console.log(arrMultiply(["9", "0"])); // Output: '0'
