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
  let minNum = String(n).split('').sort().join('')[0]
  const pos = String(n).indexOf(minNum)
  console.log(pos)
  console.log(String(n).length - 1)
  let resultMid = +(String(n).slice(0, pos) + String(n).slice(pos + 1))
	let resultStart = +String(n).slice(1)  
  let resultEnd = +String(n).slice(0, String(n).length - 1)
  return Math.max(resultStart, resultMid, resultEnd)
}

module.exports = {
  deleteDigit
};
