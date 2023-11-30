const repeatString = function(string, num) {
    let repeatedText = '';

    if (num == 0) {
        return '';
    }
    else if (num > 0) {
        for (i = 0; i < num; i++) {
            repeatedText += string;
        }
    } else {
        return 'ERROR';
    }


    return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
