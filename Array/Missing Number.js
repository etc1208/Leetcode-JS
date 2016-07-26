/*268. Missing Number

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it 
using only constant extra space complexity?*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	var len = nums.length + 1;
    var hashMap = [len];
    for(var i=0;i<len;i++) {
    	hashMap[i] = -1;
    }
    for(i=0;i<len-1;i++) {
    	hashMap[nums[i]] = 1;
    }
    return hashMap.indexOf(-1);
};

/*法二：使用位操作来解，用到了异或操作的特性(0和任何数异或都是那个数)
	既然0到n之间少了一个数，我们将这个少了一个数的数组和0到n之间完整的数组异或一下，
	那么相同的数字都变为0了，剩下的就是少了的那个数字了*/
var missingNumber2 = function(nums) {
	var res = 0;
	for(var i=0;i<nums.length;i++) {
		res ^= (i+1) ^ nums[i];
	}
	return res;
}

/*法三：二分查找，需要先排序*/
var missingNumber3 = function(nums) {
	nums.sort();
	var left = 0, right = nums.length ;
	while(left < right) {
		var mid = Math.floor(left + (right - left) /2);
		if(nums[mid] > mid) right = mid;
		else left = mid + 1;
	}
	return right;
}

console.log(missingNumber3([0,1,3,4,5]));