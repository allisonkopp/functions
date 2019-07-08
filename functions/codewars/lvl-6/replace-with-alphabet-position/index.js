//refactor
const alphabetPosition = text => {
  const parseStr = [...text.toLowerCase()];
  const alphabet = [];
  for (let i = 97; i <= 122; i++) alphabet.push(String.fromCharCode(i));
  const parsedAlphabet = parseStr.reduce((acc, letter) => {
    const index = alphabet.indexOf(letter) + 1;
    if (index) return acc ? acc + ' ' + index : index;
    return acc;
  }, String());
  return parsedAlphabet;
};

//first attempt
const alphabetPosition = text => {
  const parseStr = text.toLowerCase().split('');
  const alphabet = [];
  for (let i = 97; i <= 122; i++) alphabet.push(String.fromCharCode(i));
  const parsedAlphabet = parseStr.reduce((acc, letter) => {
    const index = alphabet.indexOf(letter);
    if (index !== -1) acc.push(index + 1);
    return acc;
  }, []);
  return parsedAlphabet.join(' ');
};

alphabetPosition("The sunset sets at twelve o' clock.");
