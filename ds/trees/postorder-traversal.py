# Postorder Traversal

def postOrder(root):
    def recursive_traversal(node):
        if not node:
            return

        recursive_traversal(node.left)
        recursive_traversal(node.right)
        values.append(node.info)

    values = []
    recursive_traversal(root)

    output = ' '.join(map(str, values))
    print(output)

# Passed 6 test cases successfully.
