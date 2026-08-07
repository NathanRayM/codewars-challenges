/*
Description:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

*/

var isAnagram = function (test, original) {
  let wordOne = test.toLowerCase().split("").sort().join("");
  let wordTwo = original.toLowerCase().split("").sort().join("");
  return wordOne === wordTwo ? true : false;
};

console.log(isAnagram("foefet", "toffee")); //Output: true
console.log(isAnagram("Buckethead", "DeathCubeK")); //Output: true
