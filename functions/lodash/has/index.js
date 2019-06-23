//With Lodash

const { has } = require('lodash');

const obj1 = { a: { b: { c: 'hello' } } };
const foo = has(obj1, 'a.b.c');
const bar = has(obj1, ['a', 'b', 'c']);

console.log(foo);
console.log(bar);

//Without Lodash

const hasV2 = (obj, path) => {
  const pathArray = typeof path === 'string' ? path.split('.') : path;
  return !!pathArray.reduce((acc, path, i) => acc && acc[path], obj);
};

console.log(hasV2(obj1, 'a.b.c'));
console.log(hasV2(obj1, 'a.d.c'));
