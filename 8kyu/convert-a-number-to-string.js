/*
Description:
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):

123  --> "123"
999  --> "999"
-100 --> "-100"
*/

function numberToString(num) {
  let str = String(num);
  return str;
}

console.log(numberToString(123)); //Outputs "123"
