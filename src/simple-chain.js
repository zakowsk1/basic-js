const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(val) {
    this.chain.push(String(val));
    return this;
  },
  removeLink(pos) {
    if (pos - 1 < 0 || pos > this.chain.length || typeof pos != 'number') {
      this.chain = [];
      throw new Error(`You can\'t remove incorrect link!`);
    }
    this.chain.splice(pos - 1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = "";
    for (let i = 0; i < this.chain.length; i++) {
      str += `( ${this.chain[i]} )~~`
    }
    this.chain = [];
    return str.slice(0,-2);
  }
};

module.exports = {
  chainMaker
};