const maxValue = (nums) => {
  let max = -Infinity;

  for (let num of nums) {
    if (max < num) {
      max = num;
    }
  }

  return max;
};

// time: O(n)
// space: O(1)
