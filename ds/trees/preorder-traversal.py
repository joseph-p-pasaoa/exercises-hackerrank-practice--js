# Preorder Traversal

def preOrder(root):
    def recursive(node):
        if not node:
            return

        values.append(node.info)
        recursive(node.left)
        recursive(node.right)

    values = []
    recursive(root)

    output = ' '.join(map(str, values))
    print(output)

# Passed 6 test cases successfully.
