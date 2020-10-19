# Inorder Traversal

def inOrder(root):
    def recursive_traversal(node):
        if not node:
            return

        recursive_traversal(node.left)
        values.append(node.info)
        recursive_traversal(node.right)

    values = []
    recursive_traversal(root)

    output = ' '.join(map(str, values))
    print(output)

# Passed 6 test cases successfully.
