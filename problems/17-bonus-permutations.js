/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! (factorial) different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:


***********************************************************************/

const permutations = (array) => {
   const newArr = [];
  if (array.length === 0) return [[]]
  if (array.length === 1) return [array]
  // iterate through
  for (let i = 0 ; i < array.length ; i++) {
    let el = array[i]
    let remaining = (array.slice(0, i).concat(array.slice(i + 1)));
  let subPerm = permutations(remaining)
   for (let perm of subPerm) {
    newArr.push([el, ...perm])
   }
  }
  return newArr
};
console.log(permutations([1, 2])) // [[1, 2], [2, 1]]
console.log(permutations([1, 2, 3])) // [[1, 2, 3], [1, 3, 2],

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
