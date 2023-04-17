const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[j] === 5) {
      j--;
    } else {
      if (nums[i] === 5) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        i++;
      }
    }
  }

  return nums;
};

// time: O(n)
// space: O(1)
