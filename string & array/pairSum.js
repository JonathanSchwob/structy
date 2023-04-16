const pairSum = (numbers, targetSum) => {
  const prev = {};

  for (let i = 0; i < numbers.length; i++) {
    if (prev[targetSum - numbers[i]] !== undefined) {
      return [i, prev[targetSum - numbers[i]]];
    } else {
      prev[numbers[i]] = i;
    }
  }
};
