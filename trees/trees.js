// Tree Nodes

class TreeNode {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

// Create new tree nodes;
const rootA = new TreeNode("A");
const rootB = new TreeNode("B");
const rootC = new TreeNode("C");

// Associate children with nodes;
rootA.children.push(rootB, rootC);
console.log(rootA);
