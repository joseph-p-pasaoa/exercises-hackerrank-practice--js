# Height of a Binary Tree

def height(root):
    def recur_height(node):
        if not node:
            return 0

        return max(1 + recur_height(node.left), 1 + recur_height(node.right))

    return recur_height(root) - 1

# Passed 6 test cases successfully.
