const {
	BinarySearchTree,
	TreeNode,
} = require('../../data structures/binary Search Tree/BST');

// const TreeNode = require('../../data structures/binary Search Tree/BST');
const validateBST = (root, min = -Infinity, max = Infinity) => {
	if (!root) return true;

	if (root.val <= min || root.val >= max) {
		return false;
	}

	return (
		validateBST(root.left, min, root.val) &&
		validateBST(root.right, root.val, max)
	);
};

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
// bst.insert(2);
// bst.insert(7);
// bst.insert(6);
// bst.insert(22);
bst.insert(15);
// bst.insert(6);
bst.insert(17);

bst.root.right.left = new TreeNode(6);

console.log(validateBST(bst.root));
