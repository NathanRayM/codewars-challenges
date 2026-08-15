/*
Description:
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
*/
function removeDuplicateWords(s) {
  let separate = s.split(" ");
  let newString = [...new Set(separate)];
  return newString.join(" ");
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
); //Output: "alpha beta gamma delta"
