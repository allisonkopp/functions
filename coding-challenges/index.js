/** First Non Repeating Letter (Very Hard)
Write a function named first_non_repeating_letter 
that takes a string input, and returns the first 
character that is not repeated anywhere in the string.
For example, if given the input 'stress', the 
function should return 't', since the letter t only occurs 
once in the string, and occurs first in the string.
*/
// ALL OF THESE SHOULD BE TRUE
// BONUS: As an added challenge, upper- and
//lowercase letters are considered the same character,
//but the function should return the correct case for
//the initial letter. For example, the input 'sTreSS'
//should return 'T'.

// const first_non_repeating_letter = str => {
//   const groupedLetters = str.split('').reduce((acc, letter) => {
//     const lowerCasedLetter = letter.toLowerCase();
//     acc[lowerCasedLetter] = acc[lowerCasedLetter] || [];
//     acc[lowerCasedLetter].push(letter);
//     return acc;
//   }, {});
//   return Object.values(groupedLetters).find(letter => letter.length === 1)[0];
// };

// const first_non_repeating_letter = string => {
//   let notRepeatedLetterIndex;
//   let i = 0;
//   while (i < string.length) {
//     const letter = string[i];
//     const firstOccurence = string.indexOf(letter);
//     const lastOccurence = string.lastIndexOf(letter);
//     if (firstOccurence === lastOccurence) {
//       notRepeatedLetterIndex = i;
//       break;
//     }
//     i++;
//   }
//   return string[notRepeatedLetterIndex];
// };

// console.log(first_non_repeating_letter('sTresS') === 'T');
// console.log(first_non_repeating_letter('car') === 'c')
// console.log(first_non_repeating_letter('moonmen') === 'e')

const { has } = require('lodash');

const obj1 = { a: { b: { c: 'hello' } } };
const foo = has(obj1, 'a.b.c');
const bar = has(obj1, ['a', 'b', 'c']);
// console.log(foo);
// console.log(bar);

const hasV2 = (obj, path) => {
  const pathArray = typeof path === 'string' ? path.split('.') : path;
  return !!pathArray.reduce((acc, path, i) => acc && acc[path], obj);
};

// console.log(hasV2(obj1, 'a.b.c'));

console.log(hasV2(obj1, 'a.d.c'));

// if (typeof 'a.b.c' === 'string') console.log('hello');
