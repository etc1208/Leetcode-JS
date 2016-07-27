/*62. Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying 
to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
Note: m and n will be at most 100.*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var res = [];
    for(var i=0;i<n;i++){
    	res[i] = 1;
    }
    for(i=1;i<m;i++) {
    	for(var j=1;j<n;j++) {
    		res[j] += res[j-1]; 
    	}
    }
    return res[n-1];
};

var uniquePaths2 = function(m, n) {
	if(m === 1 || n === 1) return 1;
	
	return uniquePaths2(m-1, n) + uniquePaths2(m, n-1);
}

console.log(uniquePaths(23,12))
console.log(uniquePaths2(23,12))
/*这跟之前那道 Climbing Stairs 爬梯子问题 很类似，那道题是说可以每次能爬一格或两格，
问到达顶部的所有不同爬法的个数。而这道题是每次可以向下走或者向右走，求到达最右下角的
所有不同走法的个数。那么跟爬梯子问题一样，我们需要用动态规划Dynamic Programming来解，
我们可以维护一个二维数组dp，其中dp[i][j]表示到当前位置不同的走法的个数，然后可以得到
递推式为: dp[i][j] = dp[i - 1][j] + dp[i][j - 1]，这里为了节省空间，我们使用一维数组dp，
一行一行的刷新也可以*/