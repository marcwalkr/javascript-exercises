const removeFromArray = function(arr, ...elements) {
  return arr.filter(element => !elements.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
