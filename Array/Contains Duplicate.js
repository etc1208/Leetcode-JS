/*217. Contains Duplicate

Given an array of integers, find if the array contains any duplicates. 
Your function should return true if any value appears at least twice in the array, 
and it should return false if every element is distinct.*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	var hashMap = [];
	for(var i=0;i<nums.length;i++) {
		if(hashMap.indexOf(nums[i]) > -1) return true;
		hashMap.push(nums[i]);
	}   
	return false; 
};

console.log(containsDuplicate([1,2,3,4,5]));
