//Not complete

const dirReduc = arr => {};

const test1 = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']; //["WEST"]
const test2 = ['NORTH', 'WEST', 'SOUTH', 'EAST']; //["NORTH", "WEST", "SOUTH", "EAST"]
const test3 = ['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']; //[]
const test4 = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST', 'SOUTH', 'NORTH']; //["WEST"]

console.log(dirReduc(test1), 'test1');
console.log(dirReduc(test4), 'test4');
