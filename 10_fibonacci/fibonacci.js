const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    let numInt = parseInt(number);
    if (numInt == 1) numInt += 1;
    let first = 0
    let second = 1
    let sum = 0;

    for (let i = 1; i < numInt; i++) {
        sum = second + first;
        first = second;
        second = sum;
    }

    return sum;

};

// Do not edit below this line
module.exports = fibonacci;
