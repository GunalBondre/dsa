const {
	BinarySearchTree,
} = require('../../data structures/binary Search Tree/BST');

const inOrder = (root) =>{
  if(!root) return []

  return [
    ...inOrder(root.left), root.val, ...inOrder(root.right)
  ]

}

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
console.log(inOrder(bst.root));
