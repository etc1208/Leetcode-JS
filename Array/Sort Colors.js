/*75. Sort Colors

Given an array with n objects colored red, white or blue, sort them so that 
objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*var sortColors = function(nums) {
  var count = [0,0,0], index = 0;
  for(var i=0;i<nums.length;i++) {
  	count[nums[i]]++;
  }  
  for(i=0;i<3;i++) {
  	for(var j=0;j<count[i];j++) {
  		nums[index++] = i;
  	}
  }
};
*/
var sortColors = function(nums) {
	var red = 0, blue = nums.length - 1;

	for(var i=0;i<=blue;i++) {
		if(nums[i] === 0) {
			nums[i] = nums[red];
			nums[red++] = 0;
		} else if(nums[i] === 2) {
			nums[i--] = nums[blue];
			nums[blue--] = 2;
		}
	}
}

var arr = [2,1,0,2,0,2];
sortColors(arr);
console.log(arr);