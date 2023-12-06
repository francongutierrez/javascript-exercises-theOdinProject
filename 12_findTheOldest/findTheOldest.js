const findTheOldest = function(array) {
    return array.reduce((long, current) => {
        const longAge = getLong(long.yearOfBirth, long.yearOfDeath);
        const currentAge = getLong(current.yearOfBirth, current.yearOfDeath);

        return currentAge > longAge ? current : long;
    })
};

function getLong(startYear, endYear) {
    if (!endYear) {
        const actualYear = new Date().getFullYear();
        return actualYear - startYear;
    } else {
        return endYear - startYear;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
