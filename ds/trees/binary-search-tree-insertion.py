# Binary Search Trees Insertion

###### Pre-made
class Node:
    def __init__(self, info):
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 
######


def insert(self, val):
    new_node = Node(val)

    if self.root == None:
        self.root = new_node
        return

    current = self.root

    while (current):
        prev = current
        if val < current.info:
            current = current.left
        else:
            current = current.right

    if val < prev.info:
        prev.left = new_node
    else:
        prev.right = new_node

    return self

# Passed 6 test cases successfully.
