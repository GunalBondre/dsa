const twoSum = (nums, target) => {
	const hash = {};

	for (let i = 0; i < nums.length; i++) {
		const find = target - nums[i];

		if (hash[find] !== undefined) {
			return [hash[find], i];
		}
		hash[nums[i]] = i; // Store the index of the current number
	}
};

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
