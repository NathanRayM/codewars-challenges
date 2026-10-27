/*
Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
*/

function solution(str) {
  let padded = str.length % 2 === 1 ? str + "_" : str;
  let result = [];

  for (let i = 0; i < padded.length; i += 2) {
    result.push(padded.slice(i, i + 2));
  }

  return result;
}

console.log(solution("abc")); // Output: [ 'ab', 'c_' ]
console.log(solution("abcdef")); // Output: [ 'ab', 'cd', 'ef' ]
