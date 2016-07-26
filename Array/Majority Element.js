/*169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that 
appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var majorityEle = nums[0], count = 1;
    for(var i=1;i<nums.length;i++) {
    	if(nums[i] !== majorityEle) {
    		count--;
    		if(count === 0) {
    			majorityEle = nums[i];
    			count = 1;
    		} 	
    	} else {
    		count++;
    	}
    }
    return majorityEle;
};

console.log(majorityElement([1,7,2,1,2,1,1]));

/*摩尔投票法 Moore Voting，需要O(n)的时间和O(1)的空间，比前一种方法更好。
这种投票法先将第一个数字假设为众数，然后把计数器设为1，比较下一个数和此数是否相等，
若相等则计数器加一，反之减一。然后看此时计数器的值，若为零，则将当前值设为候选众数。
以此类推直到遍历完整个数组，当前候选众数即为该数组的众数。*/