// 66. Plus One

// Given a non-negative number represented as an array of digits, plus one to the number.

// The digits are stored such that the most significant digit is at the head of the list.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length;
    for(var i=len-1; i>=0;i--) {
        if(digits[i] === 9) digits[i] = 0;
        else {
            digits[i]++;
            return digits;
        }
    }
    if(digits[0] === 0) digits.unshift(1);
    return digits;
};