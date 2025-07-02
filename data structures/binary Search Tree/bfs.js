const bSearchTree = require('./BST');

const bfs = (root) => {
	if (root === null) return;
	let result = [];
	let queue = [root];

	while (queue.length > 0) {
		let current = queue.shift();
		result.push(current.val);
		if (current.left) queue.push(current.left);

		if (current.right) queue.push(current.right);
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

console.log(bfs(bst.root));
