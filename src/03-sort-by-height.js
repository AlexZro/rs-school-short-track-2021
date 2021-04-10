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
  const arrFromArgs = [...arr];
  const sortedArr = [...arrFromArgs].filter((i) => i !== -1).sort((a, b) => a - b);

  for (let i = 0; i < arrFromArgs.length; i++) {
    if (arrFromArgs[i] !== -1) {
      arrFromArgs[i] = sortedArr.shift();
    }
  }
  return arrFromArgs;
}

module.exports = sortByHeight;
