const {
	BinarySearchTree,
} = require('../../data structures/binary Search Tree/BST');

const sameTree = (root, root2) => {
	if (!root && !root2) return true;
	if (!root || !root2) return false;

	if (root.val !== root2.val) return false;
	return sameTree(root.left, root2.left) && sameTree(root.right, root2.right);
};

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(2);
bst.insert(7);

const bst2 = new BinarySearchTree();
bst2.insert(10);
bst2.insert(5);
bst2.insert(7);
bst2.insert(2);

console.log(sameTree(bst.root, bst2.root));
