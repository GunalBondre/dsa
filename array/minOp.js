/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
	let filtered = new Set(nums.filter((num) => num > 0));
	return filtered.size;
};
console.log(minimumOperations([1, 5, 0, 3, 5]));
