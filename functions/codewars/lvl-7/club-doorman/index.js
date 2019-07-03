const passTheDoorMan = word => {
  let doubleLetter;
  let i = 0;
  while (i < word.length) {
    if (word[i] === word[i + 1]) {
      doubleLetter = word[i];
      break;
    }
    i++;
  }
  return (doubleLetter.charCodeAt(0) - 96) * 3;
};

//tests
passTheDoorMan('lettuce'); //60

passTheDoorMan('bcdegjkknoprsuvw'); //33
