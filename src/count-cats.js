const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a matrix, finds cats by their ears "^^".
 *
 * @param {Array<Array>} matrix The matrix to search for cats.
 * @return {Number} The count of cats found.
 *
 * @example
 * countCats([
 *   [0, 1, '^^'],
 *   [0, '^^', 2],
 *   ['^^', 1, 2]
 * ]) => 3
 */
function countCats(matrix) {
  let catCount = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
        catCount++;
      }
    }
  }

  return catCount;
}

module.exports = {
  countCats
};
