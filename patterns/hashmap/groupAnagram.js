const groupAnagram = (arr) => {
	let hash = {};

	for (let char of arr) {
		let sorted = char.split('').sort().join('');
		hash[sorted] ? hash[sorted].push(char) : (hash[sorted] = [char]);
	}

	return Object.values(hash);
};

console.log(groupAnagram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
