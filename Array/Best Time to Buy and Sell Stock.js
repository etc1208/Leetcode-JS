/*121. Best Time to Buy and Sell Stock

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one 
share of the stock), design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0, min = prices[0];
    for(var i=1;i<prices.length;i++) {
    	min = Math.min(min, prices[i]);
    	profit = Math.max(profit, prices[i]-min);
    }
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
/*只需要遍历一次数组，用一个变量记录遍历过数中的最小值，然后每次计算当前值和这个
最小值之间的差值最为利润，然后每次选较大的利润来更新。当遍历完成后当前利润即为所求*/