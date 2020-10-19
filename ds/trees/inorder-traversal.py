# Inorder Traversal

def inOrder(root):
    def recursiveTraversal(node):
        if not node:
            return

        recursiveTraversal(node.left)
        values.append(node.info)
        recursiveTraversal(node.right)

    values = []
    recursiveTraversal(root)

    output = ' '.join(map(str, values))
    print(output)

# Passed 6 test cases successfully.
