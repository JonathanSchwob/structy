// iterative | time: O(n) - space: O(1)
const mergeLists = (head1, head2) => {
  const dummyNode = new Node(null);
  let tail = dummyNode;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1 === null) tail.next = current2;
  if (current2 === null) tail.next = current1;

  return dummyNode.next;
};

// recursive | time: O(n) - space: O(n)
// const mergeLists = (head1, head2) => {
//   if (head1 === null && head2 === null) return null;
//   if (head1 === null) return head2;
//   if (head2 === null) return head1;

//   if (head1.val < head2.val) {
//     const temp = head1.next;
//     head1.next = mergeLists(temp, head2);
//     return head1;
//   } else {
//     const temp = head2.next;
//     head2.next = mergeLists(head1, temp);
//     return head2;
//   }
// };
