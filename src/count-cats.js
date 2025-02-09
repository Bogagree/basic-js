const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */



function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let cat = /^\^{2}/ig - не работает если 2 кота сидят рядом.
 
  let cats = 0;
  

  for (let i= 0 ; i < matrix.length ; i++) {
    matrix[i].filter( a => a == '^^' )
    cats += matrix[i].filter( a => a === '^^' ).length;
    console.log(cats);
  }
  
  return cats;
}

module.exports = {
  countCats
};
