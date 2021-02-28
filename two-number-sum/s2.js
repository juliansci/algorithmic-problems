/* 
* This second solution consists on use a hashmap. We have to travers the array and for each
* item, save the the item in the hashmap. Also, for each item calculates the rest to reach the targetSum
* and if the rest is initialized in the hshmap, then return the result.
*/

// Time Complexity: O(n)
// Space Complexity: O(n)
function twoNumberSum(array, targetSum) {
  const mapNumbers = {};
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    const rest = targetSum - number;
    if (mapNumbers[rest]) {
      return [number, rest];
    } else {
      mapNumbers[number] = true;
    }
  }
  return [];
}

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

const result = twoNumberSum(array, targetSum);

// Should be  [11,-1]
console.log(result);
