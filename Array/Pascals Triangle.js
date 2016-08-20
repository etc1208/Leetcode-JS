// 118. Pascal's Triangle

// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows <= 0) return [];
    var result = [];
    for(var curRow = 1;curRow <= numRows;curRow++) {
        var tmpRes = [];
        for(var countOfCurRow=0;countOfCurRow<curRow;countOfCurRow++) {
            if(countOfCurRow === 0 || countOfCurRow === curRow-1) tmpRes.push(1);
            else tmpRes[tmpRes.length] = result[curRow-2][tmpRes.length-1]
                + result[curRow-2][tmpRes.length];
        }
        result.push(tmpRes);
    }
    return result;
};

console.log(generate(5));