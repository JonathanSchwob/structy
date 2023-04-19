// iterative solution | time: O(n), space: O(1)
// const zipperLists = (head1, head2) => {
//   let current1 = head1;
//   let current2 = head2;
//   let next = null;

//   while (current1 !== null && current2 !== null) {
//     next = current1.next;
//     current1.next = current2;
//     current1 = current2;
//     current2 = next;
//   }

//   return head1;
// };

// recursive solution | time: O(n), space: O(n)
const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  return head1;
};
