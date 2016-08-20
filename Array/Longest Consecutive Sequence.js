// 128. Longest Consecutive Sequence
// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// For example,
// Given [100, 4, 200, 1, 3, 2],
// The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

// Your algorithm should run in O(n) complexity.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var hashMap = {};
    for(var i=0;i<nums.length;i++) {
        hashMap[nums[i]] = true;
    }
    var result = 1;
    for(var i=0;i<nums.length;i++) {
        var cur = nums[i], curMax = 1;
        hashMap[cur] = false;
        while(hashMap[cur-1] === true) {
            hashMap[cur-1] = false;
            cur--;
            curMax++;
        }
        cur = nums[i];
        while(hashMap[cur+1] === true) {
            hashMap[cur+1] = false;
            cur++;
            curMax++;
        }
        if(curMax > result) result = curMax;
    }
    return result;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
