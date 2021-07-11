// * At most two children.
// * Left children values is less than right children values.
// * Nodes values has to be ordered as left < parent < right.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

BinarySearchTree.prototype.insert = function (val) {
  const newNode = new Node(val);
  if (this.root) {
    this.insertNode(this.root, newNode);
  } else {
    // Tree is empty
    this.root = newNode;
  }
};

BinarySearchTree.prototype.insertNode = function (node, newNode) {
  // Check wether the value is greater or less than root node.
  if (node.data > newNode.data) {
    if (node.left) this.insertNode(node.left, newNode);
    // If left is empty.
    else node.left = newNode;
  } else {
    if (node.right) this.insertNode(node.right, newNode);
    // If right is empty.
    else node.right = newNode;
  }
};

BinarySearchTree.prototype.remove = function (val) {
    
}

const bst = new BinarySearchTree();
bst.insert(6);
bst.insert(1);
bst.insert(4);
bst.insert(3);
bst.insert(8);
bst.insert(9);

console.log(bst);
