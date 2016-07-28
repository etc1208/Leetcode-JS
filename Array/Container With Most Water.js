/*11. Container With Most Water

Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such that the container contains 
the most water.

Note: You may not slant the container.*/

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea2 = function(height) {
    var res = 0, len = height.length;
    for(var i=0;i<len-1;i++) {
    	for(var j=i+1;j<len;j++) {
    		tmp = (j-i) * Math.min(height[i], height[j]);
    		if(tmp > res) res = tmp;
    	}
    }
    return res;
};//超时

var maxArea = function(height) {
	var left = 0, right = height.length - 1, res = 0;
	while(left < right) {
		res = Math.max(res, Math.min(height[left], height[right]) * (right - left));
		//无论左右指针哪个变动，变动后的底边长都是一样的，所以要尽量保留纵坐标大的那个
		if(height[left] < height[right]) left++;
		else right--;
	}
	return res;
}

console.log(maxArea([2,3,8,2,3,7,3]))
console.log(maxArea2([2,3,8,2,3,7,3]));
