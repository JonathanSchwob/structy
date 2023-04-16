const pairProduct = (numbers, targetProduct) => {
  const prev = {};

  for (let i = 0; i < numbers.length; i++) {
    if (prev[targetProduct / numbers[i]] !== undefined) {
      return [i, prev[targetProduct / numbers[i]]];
    } else {
      prev[numbers[i]] = i;
    }
  }
};
