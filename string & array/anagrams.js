const anagrams = (s1, s2) => {
  const chars = {};

  for (let char of s1) {
    if (!(char in chars)) {
      chars[char] = 1;
    } else {
      chars[char] += 1;
    }
  }

  for (let char of s2) {
    if (char in chars) {
      chars[char] -= 1;
    } else {
      return false;
    }
  }

  for (let char in chars) {
    if (chars[char] !== 0) {
      return false;
    }
  }
  return true;
};

// time: O(n + m)
// space: O(n)
