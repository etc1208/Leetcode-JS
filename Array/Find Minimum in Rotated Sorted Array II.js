/*154. Find Minimum in Rotated Sorted Array II

Follow up for "Find Minimum in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

The array may contain duplicates.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 0) return 0;
    var left = 0, right = nums.length - 1, res = nums[0];
    while(left < right - 1) {
    	var mid = Math.floor(left + (right - left)/2);
    	if(nums[left] < nums[mid]) {
    		res = Math.min(res, nums[left]);
    		left = mid + 1;
    	} else if(nums[left] > nums[mid]) {
    		res = Math.min(res, nums[right]);
    		right = mid;
    	} else {
    		left++;
    	}
    }
    res = Math.min(res, nums[left]);
    res = Math.min(res, nums[right]);
    return res;
};

console.log(findMin([1,1,2,0,0,1]));