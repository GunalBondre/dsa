const {
	BinarySearchTree,
} = require('../../data structures/binary Search Tree/BST');

const treeIncludes = (root, target) => {
	if (!root) return false;

	if (root.val === target) return true;

	return treeIncludes(root.left, target) || treeIncludes(root.right, target);
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
console.log(treeIncludes(bst.root, 1));
