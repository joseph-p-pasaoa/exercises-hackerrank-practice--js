// Insert a Node at a Specific Position in a Linked List

function insertNodeAtPosition(head, data, position) {
  const newNode = new SinglyLinkedListNode(data);

  if (position === 0) {
      newNode.next = head;
      head = newNode;
  } else {
      let pointer = head;
      let toMove = position - 1;
      while (toMove > 0) {
          pointer = pointer.next;
          toMove--;
      }
      newNode.next = pointer.next;
      pointer.next = newNode;
  }

  return head;
}

// Passed 10 test cases successfully.
