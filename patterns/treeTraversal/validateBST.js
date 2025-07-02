const bSearchTree = require('../../data structures/binary Search Tree/BST');

const validateBST = (root, min = -Infinity, max = Infinity) => {
	if (!root) return true;

	if (root.val <= min || root.val >= max) return false;

	return (
		isValidBST(root.left, min, root.val) &&
		isValidBST(root.right, root.val, max)
	);
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
console.log(validateBST(bst.root));
