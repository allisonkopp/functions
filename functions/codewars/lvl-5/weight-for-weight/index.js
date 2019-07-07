//Need to fix string sort

const orderWeight = str => {
  const sortedArray = [];
  const finalSortedArr = [];
  const arr = str.split(' ').map(number => [...number]);
  const sums = arr.reduce((sum, nums, i) => {
    sum[i] = nums.reduce((acc, n) => acc + Number(n), 0);
    return sum;
  }, {});
  for (let n in sums) sortedArray.push([n, sums[n]]);
  sortedArray.sort((a, b) => (a[1] === b[1] ? String(a[1]) - String(b[1]) : a[1] - b[1]));
  const format = sortedArray.map(n => n[0]);
  for (let i = 0; i < str.split(' ').length; i++) {
    finalSortedArr.push(str.split(' ').splice(format[i], 1, str.split(' ')[i]));
  }
  return finalSortedArr.join(' ');
};

orderWeight('56 65 74 100 99 68 86 180 90'); //"100 180 90 56 65 74 68 86 99"
orderWeight('103 123 4444 99 2000'); //'2000 103 123 4444 99';
orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'); // "11 11 2000 10003 22 123 1234000 44444444 9999"
