const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr))  throw new Error("'arr' parameter must be an instance of the Array!");
  const control = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (!control.includes(arr[i])) {
    
      result.push(arr[i])
    } else {

      if (arr[i] === '--discard-next') {
        if (arr[i + 1]) i++
        if (arr[i + 1] === '--double-prev' || arr[i + 1] ==='--discard-prev') {i++}
      }
      else if (arr[i] === '--double-next') {
        if (arr[i + 1]) result.push(arr[i + 1])}
      else if (arr[i] === '--double-prev') {
        if (arr[i - 1]) result.push(arr[i - 1])}
      else if (arr[i] === '--discard-prev') {
        if (arr[i - 1]) result.pop()}
      
    }
  }
  return result
}

module.exports = {
  transform
};
