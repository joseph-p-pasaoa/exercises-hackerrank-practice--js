# Correctness and the Loop Invariant

def insertion_sort(array):
    for i in range(1, len(array)):
        key = i - 1
        curr = array[i]
        while (key >= 0) and (array[key] > curr):
          array[key + 1] = array[key]
          key -= 1
        array[key + 1] = curr

# Passed 4 test cases successfully.
