/*
Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.
*/

function last() {
  const value = arguments[0];

  if (
    arguments.length === 1 &&
    (Array.isArray(value) || typeof value === "string")
  ) {
    return value[value.length - 1];
  }

  return arguments[arguments.length - 1];
}

console.log(last("123")); // Output: 3
console.log(last([1, 2, 3])); // Output: 3
console.log(last("a", "b", "c")); // Output: c
console.log(last(5)); // Output: 5
