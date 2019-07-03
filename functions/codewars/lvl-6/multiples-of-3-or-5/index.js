const solution = number => {
  let multiples = [];
  let i = 1;
  while (i < number) {
    if (i % 3 === 0 || i % 5 === 0) multiples.push(i);
    i++;
  }
  return multiples.reduce((acc, num) => acc + num, 0);
};

console.log(solution(10)); //23
