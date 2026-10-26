/*
Description:
Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

*/

function sortMyString(s) {
  let evenIndex = "";
  let oddIndex = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenIndex += s[i];
    }
    if (i % 2 !== 0) {
      oddIndex += s[i];
    }
  }
  return `${evenIndex} ${oddIndex}`;
}

console.log(sortMyString("CodeWars")); //Output: "CdWr oeas"
