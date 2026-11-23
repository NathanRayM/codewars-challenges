/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str) {
  let strings = str.trim().split(/\s+/);

  let result = strings.map((string, index) =>
    index % 2 === 1 ? string.split("").reverse().join("") : string
  );
  return result.join(" ");
}

console.log(reverse("Reverse this string,  please!")); // Output: Reverse siht string, !esaelp
