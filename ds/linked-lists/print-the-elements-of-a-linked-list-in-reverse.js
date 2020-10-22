// Print the Elements of a Linked List in Reverse

function reversePrint(head) {
  const stack = [];
  let current = head;
  while (current) {
      stack.push(current.data);
      current = current.next;
  }

  while (stack.length > 0) {
      const value = stack.pop();
      console.log(value);
  }
  return;
}

// Passed 9 test cases successfully.
