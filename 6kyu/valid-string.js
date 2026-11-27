/*
You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.

Task
Test if the string can be entirely formed by consecutively concatenating words of the dictionary.
*/

var validWord = function (dictionary, word) {
  if (!word.length) return true;

  return dictionary.some(
    (item) =>
      item.length > 0 &&
      word.startsWith(item) &&
      validWord(dictionary, word.slice(item.length))
  );
};

console.log(validWord(["code", "wars"], "codewars")); // Output: true
console.log(validWord(["code", "wars"], "codewar")); // Output: false
console.log(validWord(["code", "wars"], "codecodewars")); // Output: true
console.log(validWord(["code", "wars"], "codewarscode")); // Output: true
console.log(validWord(["code", "star", "wars"], "starwars")); // Output: true
console.log(validWord([], "codewars")); // Output: false
