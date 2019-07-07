const orderWeight = str => {
  const parseNumber = str => [...str].reduce((acc, n) => acc + Number(n), 0);
  const arr = str.split(' ');
  arr.sort((a, b) => {
    if (parseNumber(a) == parseNumber(b)) return a > b ? 1 : -1;
    return parseNumber(a) > parseNumber(b) ? 1 : -1;
  });
  return arr.join(' ');
};

orderWeight('56 65 74 100 99 68 86 180 90'); //"100 180 90 56 65 74 68 86 99"
orderWeight('103 123 4444 99 2000'); //'2000 103 123 4444 99';
orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'); // "11 11 2000 10003 22 123 1234000 44444444 9999"
