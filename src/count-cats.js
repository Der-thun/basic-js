const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
    let count = 0
    const cat = '^^';
    backyard.forEach(element => {
      if (element === null) {
        count += 0;
      } else if (typeof element === "object") { 
        count += countCats(element)
      } else if (element === cat) {
        count++
      }
    });
    return count
}

module.exports = {
  countCats
};
