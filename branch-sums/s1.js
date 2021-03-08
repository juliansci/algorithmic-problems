// Time Complexity -> O(n) 
// Space Complexity -> Array bounded by O(n). Recursive O(log N) AVG - O(n) worst
function branchSum(node, arraySum, isRoot = false) {
  if (!node) return 0;
  const currentSum = node.value;
  let leftSum = 0;
  let rightSum = 0;
  if (node.left) {
    leftSum = branchSum(node.left, currentSum);
  }
  if (node.right) {
    rightSum = branchSum(node.right, currentSum);
  }
  const branchSum = currentSum + leftSum + rightSum;
  if (isRoot) {
    arraySum.push(branchSum);
  }
  return branchSum;
}

function branchSums(root) {
  let branchsSum = [];
  branchSum(root, branchsSum, true);
  return branchSums;
}
