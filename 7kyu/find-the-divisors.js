/*
Description:
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
*/

function divisors(integer) {
  if (integer < 2) {
    return;
  }

  let divisor = [];

  for (let i = 2; i < integer; i++)
    if (integer % i === 0) {
      divisor.push(i);
    }

  if (divisor.length === 0) {
    return `${integer} is prime`;
  }

  return divisor;
}

console.log(divisors(15)); //Output: [ 3, 5 ]
console.log(divisors(12)); //Output: [ 2, 3, 4, 6 ]
console.log(divisors(13)); //Output: 13 is prime
