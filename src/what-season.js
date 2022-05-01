const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) throw new Error('Invalid date!');

  let month = date.getMonth()
  if ([3, 4, 2].includes(month)) return 'spring'
  if ([6, 7, 5].includes(month)) return 'summer'
  if ([9, 10, 8].includes(month)) return 'autumn'
  if ([0, 1, 11].includes(month)) return 'winter'
}

module.exports = {
  getSeason
};
