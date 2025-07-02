const bSearchTree = require('./BST');

const depthFirstValues = (root) => {
	if (root === null) return [];

	const leftVal = depthFirstValues(root.left);
	const rightVal = depthFirstValues(root.right);

	return [root.val, ...leftVal, ...rightVal];
};

const bst = new bSearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(12);
bst.insert(7);
bst.insert(6);
bst.insert(8);
console.log(depthFirstValues(bst.root));
