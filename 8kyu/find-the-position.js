// Find the position!
/*
Description:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested
*/

function position(letter) {
  let letterPos = letter.charCodeAt(0) - 96;
  return `Position of alphabet: ${letterPos}`;
}
console.log(position("a")); // output: Position of alphabet: 1
console.log(position("b")); // output: Position of alphabet: 2
console.log(position("c")); // output: Position of alphabet: 3
console.log(position("d")); // output: Position of alphabet: 4
