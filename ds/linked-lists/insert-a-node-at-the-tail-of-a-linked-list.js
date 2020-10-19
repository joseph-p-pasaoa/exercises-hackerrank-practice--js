// Insert a Node at the Tail of a Linked List

function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);

  if (!head) {
      head = newNode;
  } else {
      let pointer = head;
      while (pointer.next) {
          pointer = pointer.next
      }
      pointer.next = newNode;
  }

  return head;
}

// Passed 9 test cases successfully.
