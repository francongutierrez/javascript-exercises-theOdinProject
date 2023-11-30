const leapYears = function(num) {
    let bool;

    if (num % 4 == 0 && (num % 100 != 0 || num % 400 == 0)) {
        bool = true;
    } else {
        bool = false;
    }

    return bool;
};

// Do not edit below this line
module.exports = leapYears;
