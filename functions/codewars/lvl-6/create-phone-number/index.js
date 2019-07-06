const createPhoneNumber = numbers => {
  const parsedNumber = ['('];
  parsedNumber.push(numbers.splice(0, 3).join(''), ') ');
  parsedNumber.push(numbers.splice(0, 3).join(''), '-');
  parsedNumber.push(numbers.splice(0).join(''));
  return parsedNumber.join('');
};

//refactor
const createPhoneNumber = numbers => {
  let phoneNumberFormat = '(xxx) xxx-xxxx';
  let i = 0;
  while (phoneNumberFormat.includes('x')) {
    phoneNumberFormat = phoneNumberFormat.replace('x', numbers[i]);
    i++;
  }
  return phoneNumberFormat;
};

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"
