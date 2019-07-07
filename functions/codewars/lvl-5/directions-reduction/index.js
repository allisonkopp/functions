//Better solution
const dirReduc = arr => {
  const oppositeDirections = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST'
  };
  return arr.reduce((acc, direction) => {
    acc[acc.length - 1] === oppositeDirections[direction] ? acc.pop() : acc.push(direction);
    return acc;
  }, []);
};

//First solution
const dirReduc = arr => {
  const oppositeDirections = [{ NORTH: 'SOUTH' }, { SOUTH: 'NORTH' }, { EAST: 'WEST' }, { WEST: 'EAST' }];
  const stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    key = stack[stack.length - 1];
    const match = oppositeDirections.find(x => Object.values(x) == arr[i]);
    match[key] ? stack.pop() : stack.push(arr[i]);
  }
  return stack;
};

const test1 = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']; //["WEST"]
const test2 = ['NORTH', 'WEST', 'SOUTH', 'EAST']; //["NORTH", "WEST", "SOUTH", "EAST"]
const test3 = ['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']; //[]
const test4 = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST', 'SOUTH', 'NORTH']; //["WEST"]

console.log(dirReduc(test1));
console.log(dirReduc(test4));
