const bSearchTree = require('../../data structures/binary Search Tree/BST');

const sumOfAllNodes = (root) => {
	if (root === null) return 0;
	return root.val + sumOfAllNodes(root.left) + sumOfAllNodes(root.right);
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
console.log(sumOfAllNodes(bst.root));
