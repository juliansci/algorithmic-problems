class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // Time Complexity: O(N)
  // Space Complexity: AVG O(H) H is the height of the tree - WORST O(N)
  depthFirstSearch(array) {
    array.push(this.name);
    for (const node of this.children) {
      node.depthFirstSearch(array);
    }
    return array;
  }
}
