//Need to refactor

const findOdd = A => {
  const x = A.reduce((acc, x) => {
    const num = x;
    acc[num] = acc[num] || [];
    acc[num].push(x);
    return acc;
  }, {});
  const arr = Object.values(x).find(num => num.length % 2 === 1);
  return arr[0];
};

const test = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];
console.log(findOdd(test));
