const bSearchTree = require('./BST');

const depthFirstIterative = (root) => {
	if (root === null) return [];
	let result = [];
	let stack = [root];

	while (stack.length > 0) {
		let current = stack.pop();
		result.push(current.val);
		// Push right first so left is processed first
		if (current.right) stack.push(current.right);
		if (current.left) stack.push(current.left);
	}

	return result;
};

const bst = new bSearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(2);
bst.insert(7);
bst.insert(6);
bst.insert(8);
bst.insert(15);
bst.insert(12);
bst.insert(17);
console.log(depthFirstIterative(bst.root));
