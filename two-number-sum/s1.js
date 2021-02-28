/*
 * This first solution consists on traverse the array, and for each item traverse again the array.
 * If the sum of the two items is equal to the targetSum, then return the result.
 */

// Time Complexity O(n^2)
// Space Complexity O(1)
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const firstItem = array[i];
      const secondItem = array[j];
      if (firstItem + secondItem === targetSum) {
        return [firstItem, secondItem];
      }
    }
  }
  return [];
}

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

const result = twoNumberSum(array, targetSum);

// Should be  [11,-1]
console.log(result);
