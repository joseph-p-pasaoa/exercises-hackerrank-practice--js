// Delete a Node From a Linked List

function deleteNode(head, position) {
  if (position === 0) {
      head = head.next;
  } else {
      let toMove = position - 1;
      let current = head;
      while (toMove > 0) {
          current = current.next;
          toMove--;
      }
      current.next = current.next.next;
  }

  return head;
}

// Passed 9 test cases successfully.
