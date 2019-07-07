const lengthOfLongestSubstring = s => {
  const substrings = new Map();
  let max = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (substrings.has(s[i])) {
      start = Math.max(start, substrings.get(s[i]) + 1);
    }
    substrings.set(s[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
};

lengthOfLongestSubstring('pwwkew');
lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbbbb');
