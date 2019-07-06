const vowelIndices = word => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const vowelIndices = [];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) vowelIndices.push(i + 1);
  }
  return vowelIndices;
};

console.log(vowelIndices('super'));
console.log(vowelIndices('supercalifragilisticexpialidocious'));
