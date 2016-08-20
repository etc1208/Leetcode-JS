// 74. Search a 2D Matrix

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// For example,

// Consider the following matrix:

// [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// Given target = 3, return true.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || matrix.length === 0) return false;
    var m = matrix.length, n = matrix[0].length;
    if(target < matrix[0][0] || target > matrix[m-1][n-1]) return false;

    var rightRow = m - 1, leftRow = 0;

    while(leftRow <= rightRow) {
        var midRow = leftRow + Math.floor((rightRow - leftRow)/2);
        if(target === matrix[midRow][0] || target === matrix[midRow][n-1]) return true;
        if(target < matrix[midRow][0]) {
            rightRow = midRow - 1;
        } else if(target > matrix[midRow][n-1]) {
            leftRow = midRow + 1;
        } else {
            var left = 0, right = n - 1;
            while(left <= right) {
                var mid = left + Math.floor((right - left) / 2);
                if(target === matrix[midRow][mid]) return true;
                if(target < matrix[midRow][mid]) right = mid - 1;
                else left = mid + 1;
            }
            return false;
        }
    }
    return false;
};

var matrix = [[1,   3,  5,  7],[10, 11, 16, 20],[23, 30, 34, 50]];
console.log(searchMatrix(matrix,2));