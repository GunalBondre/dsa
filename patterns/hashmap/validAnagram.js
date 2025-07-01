var isAnagram = function (s, t) {
	const hashmap = {};
	if (s.length !== t.length) return false;

	for (let i = 0; i < s.length; i++) {
		hashmap[s[i]] = hashmap[s[i]] + 1 || 1;
	}

	for (let i = 0; i < t.length; i++) {
		if (!hashmap[t[i]]) return false;
		hashmap[t[i]] = hashmap[t[i]] - 1;
	}

	for (let i in hashmap) {
		if (hashmap[i] > 0) return false;
	}
	return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
