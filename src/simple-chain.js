const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value !== undefined) {
      this.chain.push(`( ${value} )`)
    } else {
      this.chain.push(`( )`)
    }
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.getLength() ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let result = ''
    for (let i = 0; i < this.chain.length - 1; i++) {
      result += this.chain[i] + '~~'
    }
    result += this.chain[this.chain.length - 1]
    this.chain = []
    return result
  }
};

module.exports = {
  chainMaker
};
