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
function repeater(str, options) {

  const tempArr = [];
  const repeatArr = []; 

if (options.addition === undefined) options.addition = '';
  
if (!options.additionRepeatTimes) tempArr.push(options.addition)

// let separ1;

// if (options.additionSeparator !== '|' ) separ1 = options.additionSeparator;

if (!options.repeatTimes) repeatArr.push(str + tempArr.join((options.additionSeparator ? options.additionSeparator : '|')));

for (let i = 0; i < options.additionRepeatTimes; i++) tempArr.push(options.addition + '');

for (let i = 0; i < options.repeatTimes; i++) repeatArr.push(str + tempArr.join((options.additionSeparator ? options.additionSeparator : '|')));

// let separ2;
// if (options.separator !== '+' ) separ12 = options.separator;
  

return repeatArr.join(options.separator ? options.separator : '+')


}

module.exports = {
  repeater
};
