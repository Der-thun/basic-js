const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false
  let number = Number(sampleActivity)
  if (isNaN(number)) return false
  if (number <= 0) return false
  let result = Math.ceil(Math.log(15 / number) / (0.693 / 5730))
  if (result < 0) return false
  return result
}

module.exports = {
  dateSample
};
