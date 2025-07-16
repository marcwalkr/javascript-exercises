const fibonacci = function(n) {
  if (isNaN(Number(n)) || Number(n) < 0) return "OOPS";
  if (Number(n) === 0) return 0;
  if (Number(n) < 3) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
