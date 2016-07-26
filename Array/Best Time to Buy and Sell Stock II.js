/*122. Best Time to Buy and Sell Stock II

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as 
you like (ie, buy one and sell one share of the stock multiple times). However, you may not 
engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0;
    for(var i=1;i<prices.length;i++) {
    	if(prices[i] > prices[i-1])
    		profit += (prices[i] - prices[i-1]);
    }
    return profit;
};

/*我们都知道炒股想挣钱当然是低价买入高价抛出，那么这里我们只需要从第二天开始，
如果当前价格比之前价格高，则把差值加入利润中，因为我们可以昨天买入，今日卖出，
若明日价更高的话，还可以今日买入，明日再抛出。以此类推，遍历完整个数组后即可求得最大利润。*/