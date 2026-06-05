/*
Description:
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

*/

function oddOrEven(array) {
  total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  if (total % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven([0, 1, 4])); // Output: odd
console.log(oddOrEven([2, 2, 2])); // Output: even
