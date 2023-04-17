const intersection = (a, b) => {
  const numbers = new Set();
  const out = [];

  for (let num of a) {
    numbers.add(num);
  }

  for (let num of b) {
    if (numbers.has(num)) {
      out.push(num);
    }
  }

  return out;
};

// time: O(n + m)
// space: O(n)
