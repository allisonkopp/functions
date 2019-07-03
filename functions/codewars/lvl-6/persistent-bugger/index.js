const persistence = (num, count) => {
  count = count || 0;
  const product = num
    .toString()
    .split('')
    .reduce((acc, num) => acc * Number(num));
  if (product.length === 1) return count;
  count++;
  return persistence(product, count);
};

console.log(persistence(999)); //4
console.log(persistence(4)); //0
console.log(persistence(25)); //2
console.log(persistence(39)); //3
