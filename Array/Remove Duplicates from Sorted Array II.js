// 80. Remove Duplicates from Sorted Array II

// Follow up for "Remove Duplicates":
// What if duplicates are allowed at most twice?

// For example,
// Given sorted array nums = [1,1,1,2,2,3],

// Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var curDup = null;
    for(var i=1;i<nums.length;i++) {
        if(nums[i] === nums[i-1]) {
            if(curDup === nums[i]) {
                nums.splice(i--, 1);
            } else {
                curDup = nums[i];
            }
        }
    }
    return nums.length;
};

var nums = [1,1,1,2,2,3];
console.log(removeDuplicates(nums))