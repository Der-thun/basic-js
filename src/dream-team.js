const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
   if (Array.isArray(members) === false) {return false}
  let dreamName = [];
  members.forEach(elem => {
    if (typeof elem === "string") {
      let name = elem.trim()
      dreamName.push(name[0].toUpperCase()) 
    }
  })
  dreamName.sort()
  dreamName = dreamName.join('')
  if (dreamName.length === 0) return false
  return dreamName
}

module.exports = {
  createDreamTeam
};
