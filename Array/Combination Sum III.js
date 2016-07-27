/*216. Combination Sum III

Find all possible combinations of k numbers that add up to a number n, 
given that only numbers from 1 to 9 can be used and each combination 
should be a unique set of numbers.

Example 1:
Input: k = 3, n = 7
Output:
[[1,2,4]]


Example 2:
Input: k = 3, n = 9
Output:
[[1,2,6], [1,3,5], [2,3,4]]*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var res = [];
    var out = [];

    combinationSum3DFS(k, n, 1, out, res);
    return res;
};

var combinationSum3DFS = function(k, n, start, out, res) {
	if(n < 0) return;
	if(n === 0 && out.length === k) res.push(out);
	for(var i=start;i<=9;i++) {
		out.push(i);
		combinationSum3DFS(k, n-i, i+1, out, res);
		out.pop();
	}
};

console.log(combinationSum3(3,7));