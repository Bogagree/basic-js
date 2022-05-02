const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  
  let arrNumbers = n.toString().split('').map(c => parseInt(c));
   
  let arrAcc = [];
  
  let  arrNumbersTemp = [];

  for (let i=0; i < arrNumbers.length; i++) {
    
    arrNumbersTemp = [...arrNumbers]
    
    arrNumbersTemp.splice(i, 1)
    
    arrAcc.push(arrNumbersTemp.join(''))
    
    console.log(arrAcc);
  };
  
  
  let max = Math.max.apply(null, arrAcc);

  console.log(max);
  
 return max
}

module.exports = {
  deleteDigit
};
