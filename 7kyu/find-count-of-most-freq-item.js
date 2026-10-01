/*
Description:
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
*/

function countDuplicates(arr) {
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentCount = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentCount++;
      }
    }
    if (currentCount > maxCount) {
      maxCount = currentCount;
    }
  }
  return maxCount;
}

console.log(countDuplicates([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])); // Output: 5
