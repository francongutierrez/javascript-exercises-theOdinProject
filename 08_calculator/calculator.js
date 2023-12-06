const add = function(a, b) {
	return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((all, item) => all + item, 0)
};

const multiply = function(array) {
  return array.reduce((product, item) => product * item)
};

const power = function(number, times) {
	let sum = number;
  for (let i = 2; i <= times; i++) {
    sum *= number;
  }
  return sum;
};

const factorial = function(n) {
	if (n == 0) return 1;
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
