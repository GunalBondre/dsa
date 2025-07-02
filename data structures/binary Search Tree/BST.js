class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const new_node = new TreeNode(value);
		if (this.root === null) {
			this.root = new_node;
			return;
		}

		let current = this.root;
		while (true) {
			if (value < current.val) {
				if (current.left === null) {
					current.left = new_node;
					return;
				}
				current = current.left;
			} else if (value > current.val) {
				if (current.right === null) {
					current.right = new_node;
					return;
				}
				current = current.right;
			} else {
				return null;
			}
		}
	}

	search(val) {
		let current = this.root;

		while (current !== null) {
			if (current.val === val) return true;
			else if (val < current.val) current = current.left;
			else current = current.right;
		}
		return false;
	}
}

module.exports = BinarySearchTree;
