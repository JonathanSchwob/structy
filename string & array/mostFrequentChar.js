const mostFrequentChar = (s) => {
  const count = {};
  let best = null;

  for (let char of s) {
    if (!(char in count)) {
      count[char] = 1;
    } else {
      count[char] += 1;
    }
  }

  for (let char of s) {
    if (best === null || count[char] > count[best]) {
      best = char;
    }
  }

  return best;
};

// time: O(n)
// space: O(n)
