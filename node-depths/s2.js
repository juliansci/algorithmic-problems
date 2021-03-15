// Iteratively
// Time Completixy: O(n)
// Space Complexity: O(h) where h is the height of the tree.
function nodeDepths(root) {
  const stackNodes = [{ node: root, depth: 0 }];
  let globalSum = 0;
  while (stackNodes.length > 0) {
    const { node: currentNode, depth } = stackNodes.pop();
    globalSum += depth;
    if (currentNode.left) {
      stackNodes.push({ node: currentNode.left, depth: depth + 1 });
    }
    if (currentNode.right) {
      stackNodes.push({ node: currentNode.right, depth: depth + 1 });
    }
  }
  return globalSum;
}
