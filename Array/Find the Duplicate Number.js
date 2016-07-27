/*287. Find the Duplicate Number
Given an array nums containing n + 1 integers where each integer is
between 1 and n (inclusive), prove that at least one duplicate number must exist. 
Assume that there is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var low = 1, high = nums.length - 1;
     
    while(low <= high) {
    	var mid = Math.floor(low + (high-low)/2);
    	var count = 0;             
    	for(var i=0;i<nums.length;i++) {
    		if(nums[i] <= mid) count++;
    	}
    	if(count > mid) high = mid - 1;
    	else low = mid + 1;
    }
    return low;
};

console.log(findDuplicate([1,2,1,3,4]));
/*题目要求我们不能改变原数组，即不能给原数组排序，又不能用多余空间，
那么哈希表神马的也就不用考虑了，又说时间小于O(n2)，也就不能用brute force的方法，
那我们也就只能考虑用二分搜索法了，我们在区别[1, n]中搜索，首先求出中点mid，
然后遍历整个数组，统计所有小于等于mid的数的个数，如果个数大于mid，
则说明重复值在[mid+1, n]之间，反之，重复值应在[1, mid-1]之间，然后依次类推，
直到搜索完成，此时的low就是我们要求的重复值*/