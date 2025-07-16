const palindromes = function (string) {
  const stringChars = string.toLowerCase().split("");
  const charsToFilter = [" ", ",", ".", "?", "!"];
  const filtered = stringChars.filter((char) => !charsToFilter.includes(char));

  const forwards = filtered.join("");
  const backwards = forwards.split("").reverse().join("");

  return forwards === backwards;
};

// Do not edit below this line
module.exports = palindromes;
