# Postorder Traversal

def postOrder(root):
    def recursiveTraversal(node):
        if not node:
            return

        recursiveTraversal(node.left)
        recursiveTraversal(node.right)
        values.append(node.info)

    values = []
    recursiveTraversal(root)

    output = ' '.join(map(str, values))
    print(output)

# Passed 6 test cases successfully.
