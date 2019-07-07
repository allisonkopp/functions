//Need to complete

// const nextPermutation = nums => {
//   let largestNumber = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (largestNumber < nums[i]) largestNumber = nums[i];
//     // if (nums[i] < nums[i + 1]) firstIndex = i;
//     let index = nums.indexOf(largestNumber);
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] > nums[index]) console.log(nums[j], 'nums j');
//       // console.log(index);
//     }
//   }

// };

nextPermutation([1, 2, 3]); //1, 3, 2;
nextPermutation([3, 2, 1]); //1, 2, 3
nextPermutation([1, 1, 5]); //1, 5, 1
nextPermutation([1, 3, 2]); //2,1,3
nextPermutation([2, 3, 1]); //3,1,2
