/**
 *
 * @param {*} strs
 * i/p - array of strings
 * o/p - array of group of strings
 *
 * psudocode
 * 1] create a `hashmap`
 * 2] for each char in strs:
 *      sorted = sort(char)
 *      if hashmap[sorted]:
 *          hashmap[sorted].push[char]
 *      else:
 *          hashmap[sorted] = [char]
 * 3] return Object.values(hashmap)
 *
 */

var groupAnagrams = function (strs) {
	const hashmap = {};

	for (let char of strs) {
		let sorted = char.split('').sort().join('');
		hashmap[sorted] ? hashmap[sorted].push(char) : (hashmap[sorted] = [char]);
	}

	return Object.values(hashmap);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

/**
 * pattern - hashmap + sort
 * time-complexity = o(n * k log(k))
 * space-complexity = o(n*k)
 */
