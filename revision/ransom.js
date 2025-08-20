/**
 *
 * @param {*} ransomNote  String
 * @param {*} magazine  String
 *
 * i/p = two strings
 * o/p = boolean whether we can construct or not
 *
 * psudocode
 * 1] create hashmap with magazine chars
 * 2] loop thrugh ransome note and check if its avl in hashmap if yes decrement the count if goes below zero return fals
 * 3] return true
 *
 */

var canConstruct = function (ransomNote, magazine) {
	const hashmap = {};

	for (let char of magazine) {
		hashmap[char] = (hashmap[char] ?? 0) + 1;
	}

	for (let char of ransomNote) {
		if (hashmap[char] === undefined || --hashmap[char] < 0) {
			return false;
		}
	}
	return true;
};
console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'aab'));
