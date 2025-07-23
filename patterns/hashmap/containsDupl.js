/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	const hash = {};

	for (let i = 0; i < nums.length; i++) {
		hash[nums[i]] = hash[nums[i]] + 1 || 1;
	}

	for (let j in hash) {
		if (hash[j] > 1) {
			return true;
		}
	}
	return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
