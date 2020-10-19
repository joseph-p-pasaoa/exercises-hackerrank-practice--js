# Preorder Traversal

def preOrder(root):
    def recursive_traversal(node):
        if not node:
            return

        values.append(node.info)
        recursive_traversal(node.left)
        recursive_traversal(node.right)

    values = []
    recursive_traversal(root)

    output = ' '.join(map(str, values))
    print(output)

# Passed 6 test cases successfully.
