const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const count = new Array(26).fill(0);

  for (let char of s1) {
    const index = char.charCodeAt() - 'a'.charCodeAt();
    count[index]++;
  }

  let commonCount = 0;

  for (let char of s2) {
    const index = char.charCodeAt() - 'a'.charCodeAt();
    if (count[index] > 0) {
      commonCount++;
      count[index]--;
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
