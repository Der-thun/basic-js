const { NotImplementedError } = require('../extensions/index.js');

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
  let result = ''
  while(str) {
  console.log(str)
    let symb = str[0]
    let lastPos = 0
    while(symb === str[1]) {
    	lastPos++
      str = str.slice(1)
    }
    if (lastPos === 0) { result += symb
    } else {
      result += (lastPos + 1)
      result += symb
    }

    str = str.slice(1)
  }
  return result
}

module.exports = {
  encodeLine
};
