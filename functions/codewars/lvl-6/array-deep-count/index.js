//refactor
const deepCount = arr => arr.reduce((acc, x) => (Array.isArray(x) ? acc + deepCount(x) : acc), arr.length);

//first attempt
const deepCount = (arr, count = [0] || count) => {
  arr.reduce((acc, x) => {
    count[0]++;
    return typeof x == 'object' ? acc.concat(deepCount(x, count)) : acc.concat(x);
  }, []);
  return Number(count);
};

deepCount(['x', 'y', ['z']]); //4
deepCount([[[[[[[[[]]]]]]]]]); //8
deepCount([1, 2, [3, 4, [5]]]); //7
