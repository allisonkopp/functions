// First solution
const first_non_repeating_letter = str => {
  const groupedLetters = str.split('').reduce((acc, letter) => {
    const lowerCasedLetter = letter.toLowerCase();
    acc[lowerCasedLetter] = acc[lowerCasedLetter] || [];
    acc[lowerCasedLetter].push(letter);
    return acc;
  }, {});
  return Object.values(groupedLetters).find(letter => letter.length === 1)[0];
};

//Better solution
const first_non_repeating_letter = string => {
  let notRepeatedLetterIndex;
  let i = 0;
  while (i < string.length) {
    const letter = string[i];
    const firstOccurence = string.indexOf(letter);
    const lastOccurence = string.lastIndexOf(letter);
    if (firstOccurence === lastOccurence) {
      notRepeatedLetterIndex = i;
      break;
    }
    i++;
  }
  return string[notRepeatedLetterIndex];
};

//Test
console.log(first_non_repeating_letter('sTresS') === 'T');
console.log(first_non_repeating_letter('car') === 'c');
console.log(first_non_repeating_letter('moonmen') === 'e');
