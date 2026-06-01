/*
Description:
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

function sumOfIntegersInString(s) {
  let total = 0;
  let currentNum = "";

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i]) && s[i] !== " ") {
      currentNum += s[i];
    } else {
      if (currentNum !== "") {
        total += Number(currentNum);
        currentNum = "";
      }
    }
  }
  if (currentNum !== "") {
    total += Number(currentNum);
  }
  return total;
}

console.log(sumOfIntegersInString("The30quick20brown10")); // Output: 60
