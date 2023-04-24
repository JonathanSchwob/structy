// iterative | time: O(n) - space: O(1)
// const isUnivalueList = (head) => {
//   const unique = head.val;
//   let current = head;

//   while (current !== null) {
//     if (current.val !== unique) return false;
//     current = current.next;
//   }

//   return true;
// };

// recursive | time: O(n) - space: O(n)
const isUnivalueList = (head, unique = head.val) => {
  if (head === null) return true;
  if (head.val !== unique) return false;
  return isUnivalueList(head.next, unique);
};
