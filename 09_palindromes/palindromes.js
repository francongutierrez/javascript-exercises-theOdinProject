const palindromes = function (str) {
    const pureString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return pureString.split('').reverse().join('') == pureString;

};

// Do not edit below this line
module.exports = palindromes;
