function solve(str) {
  let revStr = str
    .split("")
    .filter((char) => char !== " ")
    .reverse();

  let result = "";
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += " ";
    } else {
      result += revStr[j];
      j++;
    }
  }
  return result;
}

console.log(solve("codewars")); // "srawedoc"
console.log(solve("your code")); // "edoc ruoy"
console.log(solve("your code rocks")); // "skco redo cruoy"
console.log(solve("i love codewars")); // "s rawe docevoli"
