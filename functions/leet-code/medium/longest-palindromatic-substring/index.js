//Need to refactor to avoid O(N2)

const longestPalindrome = s => {
  let longest = s[0] || '';
  if (s.length === 1) return s;
  for (let i = 0; i <= s.length; i++) {
    let letter = s[i];
    for (let j = i + 1; j <= s.length; j++) {
      if (letter === s[j]) {
        let firstOccurance = j;
        let substring = s.slice(i, firstOccurance + 1);
        if (
          substring.length > longest.length &&
          substring.toLowerCase().includes(
            substring
              .toLowerCase()
              .split('')
              .reverse()
              .join('')
          )
        )
          longest = substring;
      }
    }
  }
  return longest;
};

longestPalindrome('cbbd');
longestPalindrome('babad');
longestPalindrome('a');
longestPalindrome('ac');
longestPalindrome('');
