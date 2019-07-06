const createPhoneNumber = numbers => {
  const parsedNumber = ['('];
  parsedNumber.push(numbers.splice(0, 3).join(''), ') ');
  parsedNumber.push(numbers.splice(0, 3).join(''), '-');
  parsedNumber.push(numbers.splice(0).join(''));
  return parsedNumber.join('');
};

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"
