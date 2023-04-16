const mostFrequentChar = (s) => {
  const count = {};
  let best = null;

  for (let letter of s) {
    if (!(letter in count)) {
      count[letter] = 1;
    } else {
      count[letter] += 1;
    }
  }

  for (let letter of s) {
    if (best === null || count[letter] > count[best]) {
      best = letter;
    }
  }

  return best;
};
