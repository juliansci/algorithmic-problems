/*
 * This third solution consists on first order incrementaly the array, and the going
 * moving to the array with two pointers, comparing each value of each pointer between
 * and if the comparison is lower than the target sum, add one to left pointer and
 * if the comparison is higher than the target sum, substract one to the right pointer.
 */

// Time Complexity -> O(n * log n)
// Space Complexity -> O(1)
function twoNumberSum(array, targetSum) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  // Order the array. Could be QuickSort, MergeSort, HeapSort, etc. (O(nlogn))
  array.sort((a, b) => a - b);
  while (leftPointer < rightPointer) {
    const leftNumber = array[leftPointer];
    const rightNumber = array[rightPointer];
    const sum = leftNumber + rightNumber;

    if (sum === targetSum) return [leftNumber, rightNumber];
    if (sum < targetSum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return [];
}

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

const result = twoNumberSum(array, targetSum);

// Should be  [11,-1]
console.log(result);
