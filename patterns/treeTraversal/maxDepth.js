const {
	BinarySearchTree,
} = require('../../data structures/binary Search Tree/BST');

const maxDepth = (root) => {
	if (!root) return 0;
	const maxLeft = maxDepth(root.left);
	const maxRight = maxDepth(root.right);

	return 1 + Math.max(maxLeft, maxRight);
};

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(2);
bst.insert(7);
bst.insert(6);
bst.insert(8);
bst.insert(15);
bst.insert(12);
bst.insert(17);
console.log(maxDepth(bst.root));
