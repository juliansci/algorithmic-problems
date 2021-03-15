// Time completixy -> O(n)
// Space Complexity: O(h) where h is the height of the tree.
function nodeDepths(root) {
  return nodeDepthsSum(root, -1);
}

function nodeDepthsSum(node, parentDepth) {
  const currentDepth = parentDepth + 1;
  // Leaf node
  if (!node.left && !node.right) {
    return currentDepth;
  }
  let leftNodeDepth = 0;
  let rightNodeDepth = 0;
  if (node.left) {
    leftNodeDepth = nodeDepthsSum(node.left, currentDepth);
  }
  if (node.right) {
    rightNodeDepth = nodeDepthsSum(node.right, currentDepth);
  }
  return currentDepth + leftNodeDepth + rightNodeDepth;
}
