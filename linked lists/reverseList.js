// iterative solution | time: O(n) | space: O(1)
// const reverseList = (head) => {
//   let current = head;
//   let prev = null;
//   let next = null;

//   while (current !== null) {
//     next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }

//   return prev;
// };

// recursive solution | Time: O(n), Space: O(n)
const reverseList = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  prev = head;
  return reverseList(next, prev);
};
