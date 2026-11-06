const { NotImplementedError } = require('../lib');

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

// проходит только базовый кейс
// function repeater(str, options) {
//   const {repeatTimes,separator, addition,additionRepeatTimes, additionSeparator } = options
//   const subStr = `${addition}${additionSeparator}`
//     .repeat(additionRepeatTimes)
//     .slice(0, -(additionSeparator.length))
//
//   return `${str}${subStr}${separator}`
//     .repeat(repeatTimes)
//     .slice(0, -(separator.length))
// }

function repeatJoin(part, times, separator) {
  return Array(times).fill(String(part)).join(String(separator));
}

// дефолтные значения выводятся из тестов extended-repeater.test.js
function repeater(str, options = {}) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const additionPart = repeatJoin(addition, additionRepeatTimes, additionSeparator);

  return repeatJoin(String(str) + additionPart, repeatTimes, separator);
}

console.log('repeater',repeater('STRING', { repeatTimes: 3, separator: '**',
  addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))

module.exports = {
  repeater
};
