/*48. Rotate image

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	var n = matrix.length;

	for(var i=0;i<n;i++) {
		for(var j=i+1;j<n;j++) {
			var tmp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = tmp;
		}
	}    
	for(var i=0;i<n;i++) {
		matrix[i].reverse();
	}
};
var arr = [[1,2,3],[4,5,6],[7,8,9]];
rotate(arr);
console.log(arr);
/*首先对原数组取其转置矩阵，然后把每行的数字翻转可得到结果，如下所示：

1  2  3　　　 　　 1  4  7　　　　　    7  4  1

4  5  6　　-->　　 2  5  8　　 -->  　  8  5  2　　

7  8  9 　　　 　　3  6  9　　　　      9  6  3*/
