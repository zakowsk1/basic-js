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
function repeater(str, options = {}) {
  const {
    separator = '+',
    additionSeparator = '|',
    addition = '',
    additionRepeatTimes = 1,
    repeatTimes = 1
  } = options;

  const addStr = (addition + additionSeparator).repeat(additionRepeatTimes);
  const repeatingStr = (str + addStr.slice(0, -additionSeparator.length) + separator).repeat(repeatTimes);

  return repeatingStr.slice(0, -separator.length);
}


module.exports = {
  repeater
};