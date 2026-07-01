/*
Description:
This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.
*/

function mergeStrings(first, second) {
  let overlap = 0;

  for (let i = 1; i <= first.length; i++) {
    let end = first.slice(first.length - i);

    let start = second.slice(0, i);

    if (end === start) {
      overlap = i;
    }
  }

  return first + second.slice(overlap);
}

console.log(mergeStrings("abcde", "cdefgh")); // Output: "abcdefgh"
console.log(mergeStrings("abaab", "aabab")); // Output: "abaabab"
console.log(mergeStrings("abc", "def")); // Output: "abcdef"
console.log(mergeStrings("abc", "abc")); // Output: "abc"
