/*
Description:
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/

function reverseWords(str) {
  let words = str.split(" ").map((word) => word.split("").reverse().join(""));
  return words.join(" ");
}

console.log(reverseWords("This is an example!")); //Output: "sihT si na !elpmaxe"
console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); // Output: "elbuod  secaps"
