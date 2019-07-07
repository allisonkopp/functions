const searchRange = (nums, target) => {
  const positions = [];
  const firstIndex = nums.findIndex(n => n === target);
  const lastIndex = nums.lastIndexOf(target);
  positions.push(firstIndex, lastIndex);
  return positions;
};

searchRange([5, 7, 7, 8, 8, 10], 8); //[3, 4]
