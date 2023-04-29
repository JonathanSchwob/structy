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

// recursive | time: O(n) - space: O(n)
// const longestStreak = (head, value = null, streak = 0, count = 0) => {
//   if (head === null) return streak;
//   if (value === null) value = head.val;
//   if (head.val !== value) {
//     if (streak < count) {
//       streak = count;
//     }
//     value = head.val;
//     count = 0;
//   }

//   count += 1;
//   if (streak < count) {
//     streak = count;
//   }
//   return longestStreak(head.next, value, streak, count);
// };
