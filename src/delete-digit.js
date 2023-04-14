const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str_n = n + '';
  let max_n = 0;
  for (let i=0; i<str_n.length; i++) {
    let temp_n = str_n.slice(0, i) + str_n.slice(i+1);
    max_n = Math.max(max_n, parseInt(temp_n));
  }
  return max_n;
}

module.exports = {
  deleteDigit
};
