// Solution with recursion
// Time Complexity -> O(log(N)) AVG - O(N) worst
// Space Complexity -> O(log(N)) AVG - O(N) worst
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstNode(tree, target);
}

function findClosestValueInBstNode(node, target, closest = Infinity) {
  if (!node) return closest;
  if (node.value === target) return node.value;
  if (Math.abs(target - node.value) < Math.abs(target - closest)) {
    closest = node.value;
  }
  if (node.value > target) {
    return findClosestValueInBstNode(node.left, target, closest);
  } else {
    return findClosestValueInBstNode(node.right, target, closest);
  }
}
