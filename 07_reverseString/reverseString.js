const reverseString = function(string) {
  const characters = string.split("");
  const reversed = characters.reverse();
  return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
