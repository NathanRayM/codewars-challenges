/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
*/

function getSum(a, b) {
  let total = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
}

console.log(getSum(1, 0));
console.log(getSum(2, 2));
console.log(getSum(5, -1));
