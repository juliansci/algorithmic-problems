/**
 * This is the same solution of s1 but with other implementation
 */

function isValidSubsequence(array, sequence) {
  arrayIdx = 0;
  sequenceIdx = 0;
  while (arrayIdx < array.length && sequenceIdx < sequence.length) {
    if (array[arrayIdx] === sequence[sequenceIdx]) {
      sequenceIdx++;
    }
    arrayIdx++;
  }
  return sequenceIdx === sequence.length;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

const result = isValidSubsequence(array, sequence);
console.log(result);
