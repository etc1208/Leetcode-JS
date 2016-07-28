/*153. Find Minimum in Rotated Sorted Array

Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
/*var findMin = function(nums) {
    var min = nums[0];
    for(var i=0;i<nums.length-1;i++) {
    	if(nums[i] > nums[i+1]) min = nums[i+1];
    }
    return min;
};*/

/*二分*/
var findMin = function(nums) {
	var low = 0, high = nums.length - 1;
	if(nums[low] <= nums[high]) return nums[low];
	
	while(low != (high-1)) {
		var mid = Math.floor(low + (high - low)/2);
		if(nums[mid] < nums[low]) high = mid;
		else low = mid;
	}
	return Math.min(nums[low], nums[high]);
}

console.log(findMin([1]))
/*首先要判断这个有序数组是否旋转了，通过比较第一个和最后一个数的大小，
如果第一个数小，则没有旋转，直接返回这个数。如果第一个数大，就要进一步搜索。
我们定义left和right两个指针分别指向开头和结尾，还要找到中间那个数，
然后和left指的数比较，如果中间的数大，则继续二分查找右半段数组，反之查找左半段。
终止条件是当左右两个指针相邻，返回小的那个。*/