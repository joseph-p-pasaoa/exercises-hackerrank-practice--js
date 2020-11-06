// Counting Sort 1

function countingSort(arr) {
  const counts = new Array(100).fill(0);
  arr.forEach(num => counts[num] += 1);

  return counts;
}

// Passed 6 test cases successfully.
