// Write a function which calculates the average of the numbers in a given array.

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let total = 0;
  let count = array.length;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  let result = total / count;
  return result;
}

console.log(findAverage([1, 2, 3, 4, 5])); // Output  3
