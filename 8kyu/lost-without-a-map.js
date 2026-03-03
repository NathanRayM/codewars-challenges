/*
Description:
Given an array of integers, return a new array with each value doubled.
*/

function maps(x) {
  let double = x.map((num) => num * 2);
  return double;
}

console.log(maps([1, 2, 3])); // Output [ 2, 4, 6 ]
