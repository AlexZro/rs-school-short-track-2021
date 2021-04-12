/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      arr.push(count === 1 ? str[i] : count + str[i]);
      count = 1;
    } else {
      count++;
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
