// iterative solution | time: O(n), space: O(1)
const getNodeValue = (head, index) => {
  let current = head;
  let currentIndex = 0;
  while (current !== null) {
    if (currentIndex === index) {
      return current.val;
    }
    current = current.next;
    currentIndex++;
  }

  return null;
};

// recursive solution | time: O(n), space: O(n)

// const getNodeValue = (head, index, i = 0) => {
//   if (head === null) return null;
//   if (i === index) return head.val;
//   i += 1;
//   return getNodeValue(head.next, index, i);
// }
