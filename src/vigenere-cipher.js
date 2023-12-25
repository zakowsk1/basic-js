const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(arg) {
    if (arg === false) {
      this.type = false;
    } else {
      this.type = true;
    }

  }
  encrypt(string, key) {
    if (string === undefined || key === undefined) throw new Error(`Incorrect arguments!`);

    let encryptString = [];
    let dict = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let j = 0;

    for (let i = 0; i < string.length; i++) {
      if (dict.includes(string[i].toLowerCase())) {
          let start = dict.indexOf(string[i].toLowerCase());
          let keyDict = dict.indexOf(key[j].toLowerCase());

          if (start + keyDict < dict.length) {
            encryptString.push(dict[start + keyDict]);
          } else if (start + keyDict >= dict.length) {
            encryptString.push(dict[start + keyDict - dict.length]);
          }
          if (++j === key.length) j = 0;
      } else {
        encryptString.push(string[i]);
      }
    }
    if (this.type) {
      return encryptString.join('').toUpperCase();
    } else {
      return encryptString.reverse().join('').toUpperCase();
    }
  }
  decrypt(string, key) {
    if (string === undefined || key === undefined) throw new Error(`Incorrect arguments!`);

    let decryptString = [];
    let dict = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let j = 0;

    for (let i = 0; i < string.length; i++) {
      if (dict.includes(string[i].toLowerCase())) {
          let start = dict.indexOf(string[i].toLowerCase());
          let keyDict = dict.indexOf(key[j].toLowerCase());
          let decPos = dict.length - (keyDict - start);

          if (decPos < dict.length ) {
            decryptString.push(dict[decPos]);
          } else if (decPos >= dict.length) {
            decryptString.push(dict[decPos - dict.length]);
          }
          if (++j === key.length) j = 0;
      } else {
        decryptString.push(string[i]);
      }
    }
    if (this.type) {
      return decryptString.join('').toUpperCase();
    } else {
      return decryptString.reverse().join('').toUpperCase();
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};