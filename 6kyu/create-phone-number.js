/*
Description:
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers) {
  let nums = numbers.join("");

  let areaCode = nums.slice(0, 3);
  let firstHalf = nums.slice(3, 6);
  let secondHalf = nums.slice(6);

  return `(${areaCode}) ${firstHalf}-${secondHalf}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Output: (123) 456-7890
