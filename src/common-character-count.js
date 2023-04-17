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
  const objFr = {};
  [...s1].forEach((char) => {
    objFr[char] = (objFr[char] || 0) + 1;
  });
  let count = 0;
  [...s2].forEach((char) => {
    if (objFr[char] > 0) {
      count++;
      objFr[char]--;
    }
  }); 
  return count;
}

module.exports = {
  getCommonCharacterCount
};
