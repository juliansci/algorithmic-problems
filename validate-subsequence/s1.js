/**
 * This solution consists on traverse the array once and for each item checks if that item is in the sequence array.
 * We'll have and index with the current sequence index, so with this index we can find the item in order.
 * If we want that the second array be a subsequence of the first array, the items of the second array
 * have to appear in the first array and also have to appear in the same order.
 */

function isValidSubsequence(array, sequence) {
  let sequenceIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[sequenceIdx]) {
      sequenceIdx++;
    }
    if (sequenceIdx === sequence.length) {
      break;
    }
  }
  return sequenceIdx === sequence.length;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

const result = isValidSubsequence(array, sequence);
console.log(result);
