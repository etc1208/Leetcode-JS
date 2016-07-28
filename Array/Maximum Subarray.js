/*53. Maximum Subarray

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
the contiguous subarray [4,−1,2,1] has the largest sum = 6.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxSum = nums[0];
    var tmpSum = nums[0];
    for(var i=1;i<nums.length;i++) {
    	/*if(nums[i] > maxSum) maxSum = nums[i];
    	tmpSum += nums[i];
    	if(tmpSum > maxSum) maxSum = tmpSum;
    	if(tmpSum < nums[i]) tmpSum = nums[i];*/
    	tmpSum = Math.max(tmpSum+nums[i], nums[i]);
    	maxSum = Math.max(maxSum, tmpSum);
    }
    return maxSum;
};

console.log(maxSubArray([-2,1]));