//Code timeout -- fix

const removeNb = n => {
  const sequence = [];
  const results = [];
  for (let i = 1; i <= n; i++) sequence.push(i);
  const sum = sequence.reduce((acc, num) => acc + num, 0);
  let x = 1;
  while (x <= n) {
    sequence.map(num => {
      if (sum === num * x + num + x) results.push([x, num]);
    });
    x++;
  }
  return results;
};

//test
console.log(removeNb(26));
//console.log(removeNb(1000003))
// console.log(removeNb(102));
