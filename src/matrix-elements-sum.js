const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0
  let temp = []
  matrix.forEach(elem => {
    for (let i = 0; i < elem.length; i++) {
      if(!temp.includes(i)) {
        result += elem[i]
        if (elem[i] === 0) temp.push(i)
      }
    }
  })
  return result
}

module.exports = {
  getMatrixElementsSum
};
