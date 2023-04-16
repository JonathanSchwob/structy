// iterative solution | time: O(n), space: O(1)

const sumList = (head) => {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }

  return sum;
};

// recursive solution | time: O(n), space: O(n)
// const sumList = (head) => {
//   let sum = 0;

//   return traverse(head, sum);
// };

// const traverse = (node, sum) => {
//   if (node === null) return sum;
//   sum += node.val;

//   return traverse(node.next, sum)
// }
