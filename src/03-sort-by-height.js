/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newarr = [...arr];
  const ark = [...newarr].filter((i) => i !== -1).sort((a, b) => a - b);

  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i] !== -1) {
      newarr[i] = ark.shift();
    }
  }
  return newarr;
}

module.exports = sortByHeight;
