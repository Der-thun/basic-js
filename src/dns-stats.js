const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
	let result = {};
  let fulldom = ''
  while (domains.length !== 0) {
  let dom
  let dotPos = domains[0].lastIndexOf('.')
  let count = 0
  if (dotPos !== -1) {dom = domains[0].slice(dotPos)}
  else {dom = '.'+ domains[0].slice()}
  for (let i = 0; i < domains.length; i++) {
  	if (domains[i].includes(dom)) {
    	count++
      domains[i] = domains[i].substr(0, domains[i].length - dom.length)
    }else if(domains[i].includes(dom.slice(1))){
    	count++
      domains[i] = ''
    }
  }
  fulldom += dom
  result[fulldom] = count
  while(domains.indexOf('') !== -1) {
  	domains.splice(domains.indexOf(''), 1)
  }
  }
  
  return result
}

module.exports = {
  getDNSStats
};
