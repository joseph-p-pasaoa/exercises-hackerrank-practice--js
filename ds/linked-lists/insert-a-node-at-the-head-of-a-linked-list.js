// Insert a Node at the Head of a Linked List

function insertNodeAtHead(head, data) {
  const newNode = new SinglyLinkedListNode(data);

  if (!head) {
      head = newNode;
  } else {
      newNode.next = head;
      head = newNode;
  }

  return head;
}

// Passed 7 test cases successfully.
