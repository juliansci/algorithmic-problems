/**
 * For each node we have to compare the node value and the target throw the module between this values.
 * Then, we have a variable with the minDistance that we will update with the min module.
 * If the minDistance = 0, then it is the closest value.
 * The key is to take advantage of the property of the BST. So, if the minDistance > 0, we'll
 * compare with the childs of the current node. If the current node value is higher than the target,
 * then we will compare with the right BST. In the other case, we will compare with the left side.
 * The tree is a BST node that we can access to its property with tree.value, tree.left and tree.right.
 */
// Time Complexity -> O(log(n)), worst O(n)
// Space Complexity -> O(1)
function findClosestValueInBst(tree, target) {
  let closestValue = Infinity;
  let currentNode = tree;
  while (true) {
    if (Math.abs(target - currentNode.value) < Math.abs(target - closestValue)) {
      closestValue = currentNode.value;
    }
    if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
    if (Math.abs(target - closestValue) === 0) break;
    if (!currentNode) break;
  }
  return closestValue;
}
