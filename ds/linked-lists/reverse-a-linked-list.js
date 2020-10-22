// Reverse a Linked List

function reverse(head) {
  let current = head;
  let prev = null;
  while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }
  head = prev;

  return head;
}

// Passed 7 test cases successfully.
