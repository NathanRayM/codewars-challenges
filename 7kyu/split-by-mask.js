function split(string, mask) {
  let totalLength = mask.reduce((sum, length) => sum + length, 0);

  if (totalLength !== string.length) {
    return null;
  }

  let offset = 0;

  const parts = mask.map((length) => {
    const part = string.slice(offset, offset + length);
    offset += length;

    return part;
  });

  return parts;
}

console.log(split("1234567890", [3, 3, 4])); //Output: ["123", "456", "7890"]
