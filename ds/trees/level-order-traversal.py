# Level Order Traversal

def levelOrder(root):
    values = []
    q = Queue()

    q.enqueue(root)
    while (q.isEmpty() == False):
        current = q.dequeue()
        values.append(current.info)
        if current.left:
            q.enqueue(current.left)
        if current.right:
            q.enqueue(current.right)

    output = ' '.join(map(str, values))
    print(output)


class Queue:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return len(self.items) == 0

    def enqueue(self, value):
        self.items.insert(0, value)

    def dequeue(self):
        return self.items.pop()

# Passed 6 test cases successfully.
