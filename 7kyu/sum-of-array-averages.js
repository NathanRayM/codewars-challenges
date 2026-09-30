/*
Description:
Program a function that takes in an array of arrays of numbers and returns the sum of the averages of the arrays.
*/

function sumAverage(arrays) {
  let totals = arrays.map((array) => {
    const total = array.reduce((acc, curr) => acc + curr, 0);
    return total / array.length;
  });
  return totals.reduce((acc, curr) => acc + curr);
}

console.log(
  sumAverage([
    [3, 4, 1, 3, 5, 1, 4],
    [21, 54, 33, 21, 77],
  ])
);

// Output: 44.2
