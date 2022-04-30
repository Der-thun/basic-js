const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let result= ''
  let repeatTimes = 0
  let separator = '+'
  let addition = ''
  let additionRepeatTimes = 0
  let additionSeparator = '|'
    if('repeatTimes' in options) repeatTimes = options.repeatTimes
    if('separator' in options) separator = options.separator
    if('addition' in options) addition = String(options.addition)
    if('additionRepeatTimes' in options) additionRepeatTimes = options.additionRepeatTimes
    if('additionSeparator' in options) additionSeparator = options.additionSeparator
    
    let subStr = ''
    
    if (additionRepeatTimes === 0) str += addition
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j === additionRepeatTimes - 1) {subStr += addition}
      else subStr += addition + additionSeparator
    }
  
    
    if (repeatTimes === 0) result += str
    for (let i = 0; i < repeatTimes; i++) {
      if (i === repeatTimes - 1) {result += str + subStr}
      else result += str + subStr + separator
    }

    
  return result
  }

module.exports = {
  repeater
};
