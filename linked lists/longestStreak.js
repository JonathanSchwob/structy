// iterative | time: O(n) - space: O(1)
const longestStreak = (head) => {
  if (head === null) return 0;
  let current = head;
  let longest = 0;
  let count = 0;
  let prev = head.val;

  while (current !== null) {
    if (current.val !== prev) {
      if (count > longest) {
        longest = count;
      }
      prev = current.val;
      count = 0;
    }
    count += 1;
    current = current.next;
  }
  if (count > longest) {
    longest = count;
  }
  return longest;
};
