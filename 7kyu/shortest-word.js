/*
Description:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  let words = s.split(" ");
  let shortest = words[0];

  for (let word of words) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  }
  return shortest.length;
}

console.log(findShort("this is a string")); // Output: 1
