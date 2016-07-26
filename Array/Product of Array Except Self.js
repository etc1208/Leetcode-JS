/*238. Product of Array Except Self

Given an array of n integers where n > 1, nums, return an array output such that output[i] is 
equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra 
space for the purpose of space complexity analysis.)*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var output = [], len = nums.length;
    var tmp = 1;
    for(var i=0;i<len;i++) {
    	output[i] = tmp; 
    	tmp *= nums[i];
    }
    tmp = 1;
    for(var i=len-1;i>=0;i--) {
    	output[i] *= tmp;
    	tmp *= nums[i]; 
    }
    return output;
};

console.log(productExceptSelf([1,2,3,4]))