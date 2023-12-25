const { NotImplementedError } = require('../extensions/index.js');

/**
 * Finds the maximal number that can be obtained by deleting exactly one digit from the given number.
 *
 * @param {Number} n The original number.
 * @return {Number} The maximal number after deleting one digit.
 *
 * @example
 * deleteDigit(152) => 52
 */
function deleteDigit(n) {
  let maxNum = -Infinity;
  let currentNum = 0;
  const numStr = n.toString();

  for (let i = 0; i < numStr.length; i++) {
    currentNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));
    maxNum = Math.max(maxNum, currentNum);
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
