//Refactor
const solution = number => {
  const numberArr = number > 1 ? [...Array(number).keys()] : [1];
  return numberArr.reduce((acc, num) => {
    if (num % 3 === 0 || num % 5 === 0) acc += Number(num);
    return acc;
  }, 0);
};

//First attempt
const solution = number => {
  let multiples = [];
  let i = 1;
  while (i < number) {
    if (i % 3 === 0 || i % 5 === 0) multiples.push(i);
    i++;
  }
  return multiples.reduce((acc, num) => acc + num, 0);
};

solution(10); //23
