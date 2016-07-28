/*64. Minimum Path Sum

Given a m x n grid filled with non-negative numbers, find a path from top left 
to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length, n = grid[0].length;
    //定义二维数组
    var dp = [];
    for(var i=0;i<m;i++)
  		dp[i] = [];

    dp[0][0] = grid[0][0];

    //因为只能向右或向下走，所以dp[i][0]和dp[0][j]是能确定的
    for(var i=1;i<m;i++) dp[i][0] = grid[i][0] + dp[i-1][0];
    for(var j=1;j<n;j++) dp[0][j] = grid[0][j] + dp[0][j-1];

    for(i=1;i<m;i++) {
    	for(j=1;j<n;j++) {
    		dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);
    	}
    }
    return dp[m-1][n-1];
};

console.log(minPathSum([[1,2],[1,1]]));
/*需要用动态规划Dynamic Programming来做，我们维护一个二维的dp数组，其
中dp[i][j]表示当前位置的最小路径和，递推式: dp[i][j] = grid[i][j] + min(dp[i - 1][j],dp[i][j-1])*/