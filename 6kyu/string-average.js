/*
Description:
You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

function averageString(str) {
  const numberMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let separated = str.split(" ");
  let result = "";

  if (separated.map((word) => numberMap[word] > 9) || str === "") {
    result = "n/a";
  }

  let numbers = separated.map((word) => numberMap[word]);
  let average = Math.floor(
    numbers.reduce((acc, curr) => acc + curr) / numbers.length
  );

  for (let keys of Object.keys(numberMap)) {
    if (average === numberMap[keys]) {
      result = keys;
    }
  }
  return result;
}
console.log(averageString("zero nine five two")); // Output: four
console.log(averageString("four six two three")); // Output: three
console.log(averageString("four six two ten")); // n/a
console.log(averageString("")); // n/a
