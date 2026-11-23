function reverse(str) {
  let strings = str.trim().split(/\s+/);

  let result = strings.map((string, index) =>
    index % 2 === 1 ? string.split("").reverse().join("") : string
  );
  return result.join(" ");
}

console.log(reverse("Reverse this string,  please!"));
