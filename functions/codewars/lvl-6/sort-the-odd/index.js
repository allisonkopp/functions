// Refactored
const sortArray = array => {
  const oddNumbers = array.filter(x => x % 2).sort((a, b) => (a > b ? 1 : -1));
  array.forEach((n, i) => {
    if (n % 2) array.splice(i, 1, oddNumbers.shift());
  });
  return array;
};

// First solution
const sortArray = array => {
  const oddNumbers = [];
  array.forEach(n => {
    if (n % 2 === 1) oddNumbers.push(n);
  });
  oddNumbers.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 1) array.splice(i, 1, oddNumbers.shift());
  }
  return array ? array : [];
};

sortArray([5, 3, 2, 8, 1, 4]); //[1, 3, 2, 8, 5, 4];
