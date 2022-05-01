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
  constructor(direct = true) {
    this.direct = direct
  }

  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') throw new Error('Incorrect arguments!')
    message = message.toUpperCase();
    key = key.toUpperCase();
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let crypMessage = []
    let crypKey = []
    let result = ''
  
    for (let i = 0; i < key.length; i++) {
    crypKey.push(alph.indexOf(key[i]))
    }
    let keyIndex = 0
    for (let i = 0; i < message.length; i++) {
      if(alph.indexOf(message[i]) === -1) {
        crypMessage.push(message[i])
        result += message[i]
      } else {
        crypMessage.push(alph.indexOf(message[i]))
        crypMessage[i] += crypKey[keyIndex % crypKey.length]
        result += alph[crypMessage[i] % alph.length]
        keyIndex++
      }	
    }    
    return this.direct ? result : result.split('').reverse().join('');
  }


  decrypt(encryptedMessage , key) {
    if (typeof encryptedMessage !== 'string' || typeof key !== 'string') throw new Error('Incorrect arguments!')
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let crypMessage = []
    let crypKey = []
    let result = ''
  
    for (let i = 0; i < key.length; i++) {
    crypKey.push(alph.indexOf(key[i]))
    }

   let keyIndex = 0
    for (let i = 0; i < encryptedMessage.length; i++) {
      if(alph.indexOf(encryptedMessage[i]) === -1) {
        crypMessage.push(encryptedMessage[i])
        result += encryptedMessage[i]
      } else {
        crypMessage.push(alph.indexOf(encryptedMessage[i]))
        crypMessage[i] += alph.length - crypKey[keyIndex % crypKey.length]
        result += alph[crypMessage[i] % alph.length]
        keyIndex++
      }    
    }  
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
