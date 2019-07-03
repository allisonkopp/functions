//code timeout in codewars

// const partsSums = ls => {
//   const sum = [];
//   while (ls.length) {
//     const n = ls.reduce((acc, num) => acc + num, 0);
//     sum.push(n);
//     ls.shift();
//   }
//   if (!ls.length) sum.push(0);
//   return sum;
// };

// re-do
let sum = [];
const partsSums = ls => {
  if (!ls.length) {
    sum.push(0);
    return sum;
  }
  const n = ls.reduce((acc, num) => acc + num, 0);
  sum.push(n);
  ls.shift();
  return partsSums(ls);
};

ls = [0, 1, 3, 6, 10];
console.log(partsSums(ls));
