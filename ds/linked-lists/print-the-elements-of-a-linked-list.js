// Print the Elements of a Linked List

function printLinkedList(head) {
  if (!head) return;

  console.log(head.data)
  return printLinkedList(head.next)
}

// Passed 9 test cases successfully.
