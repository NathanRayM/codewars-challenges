/*
Description:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
*/
function toCamelCase(str) {
  let splitStr = str.split(/[-_]/);
  let separated = splitStr.map((word, index) => {
    if (index === 0) {
      return word;
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return separated.join("");
}

console.log(toCamelCase("the-stealth-warrior")); // Output: "theStealthWarrior"
