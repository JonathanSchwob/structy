const pairSum = (numbers, targetSum) => {
  const prev = {};

  for (let i = 0; i < numbers.length; i++) {
    if (targetSum - numbers[i] in prev) {
      return [i, prev[targetSum - numbers[i]]];
    } else {
      prev[numbers[i]] = i;
    }
  }
};

// time: O(n)
// space: O(n)
