/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * pattern - prefix sum + hashmap
 * 
 * problem statement - 560. Subarray Sum Equals K
    
    Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

    A subarray is a contiguous non-empty sequence of elements within an array.

    Example 1:

    Input: nums = [1,1,1], k = 2
    Output: 2
    Example 2:

    Input: nums = [1,2,3], k = 3
    Output: 2
 
 */
var subarraySum = function (nums, k) {
	let count = { 0: 1 };
	let result = 0;
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];

		if (count[sum - k] !== undefined) {
			result += count[sum - k];
		}
		count[sum] = count[sum] ?? 0 + 1;
	}

	return result;
};

console.log(subarraySum([1, 2, 3], 3));
