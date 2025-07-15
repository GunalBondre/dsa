/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	let hash = {};

	for (let i in s) {
		hash[s[i]] = hash[s[i]] + 1 || 1;
	}

	for (let j of t) {
		if (!hash[j]) {
			return j;
		} else {
			hash[j] -= 1;
		}
	}
};
console.log(findTheDifference('abcd', 'abcde'));
console.log(findTheDifference('a', 'aa'));
