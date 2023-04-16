// iterative solution | time: O(n), space: O(1)
const linkedListValues = (head) => {
  const out = [];
  let current = head;
  while (current !== null) {
    out.push(current.val);
    current = current.next;
  }

  return out;
};

// recursive solution | time: O(n), space: O(n)
// const linkedListValues = (head) => {
//   const out = [];

//   return traverse(head, out);
// };

// const traverse = (node, arr) => {
//   if (node === null) return arr;
//   arr.push(node.val);
//   return traverse(node.next, arr);
// };
