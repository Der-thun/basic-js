const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  let count = 0
    let temp = n.split('-')
    for (let i = 0; i < temp.length; i++) {
      let j = parseInt(temp[i], 16)
      if (isNaN(j)) {return false}
      if (j === 0) count++
    }
    if(count === 6) return false
    return true
  }
  
module.exports = {
  isMAC48Address
};
