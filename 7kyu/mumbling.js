function accum(s) {
  let parts = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let piece = char.toUpperCase() + char.toLowerCase().repeat(i);
    parts.push(piece);
  }
  return parts.join("-");
}
console.log(accum("abcd")); // Output: A-Bb-Ccc-Dddd
