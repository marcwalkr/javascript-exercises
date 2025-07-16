const fibonacci = function(nArg) {
  const n = Number(nArg);
  
  if (isNaN(n) || n < 0) return "OOPS";
  if (n === 0) return 0;

  let previous = 0;
  let next = 1;

  for (let i = 1; i < n; i++) {
    const temp = next;
    next = previous + next;
    previous = temp;
  }

  return next;
};

// Do not edit below this line
module.exports = fibonacci;
