/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = -1;
  let right = array.length;

  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === value) {
      return mid;
    } if (array[mid] > value) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return -1;
}

module.exports = findIndex;
