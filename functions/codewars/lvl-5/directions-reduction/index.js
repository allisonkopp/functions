//Not complete

const dirReduc = arr => {
  const directions = { N: [0, 1], E: [1, 0], S: [-1, 0], W: [0, -1] };

  return arr;
};

const test1 = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']; //["WEST"]
const test2 = ['NORTH', 'WEST', 'SOUTH', 'EAST']; //["NORTH", "WEST", "SOUTH", "EAST"]
const test3 = ['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']; //[]
const test4 = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST', 'SOUTH', 'NORTH']; //["WEST"]

console.log(dirReduc(test1), 'test1');
console.log(dirReduc(test4), 'test4');
