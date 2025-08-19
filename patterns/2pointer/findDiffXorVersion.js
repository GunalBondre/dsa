const findTheDifferenceOf = (s, t) => {
	let xor = 0;

	for (ch of s) {
		xor ^= ch.charCodeAt(0);
	}

	for (ch of t) {
		xor ^= ch.charCodeAt(0);
	}

	return String.fromCharCode(xor);
};

console.log(findTheDifferenceOf('abcd', 'abcde'));
console.log(findTheDifferenceOf('a', 'aa'));
