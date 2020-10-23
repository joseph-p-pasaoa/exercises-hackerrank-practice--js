// Tutorial Intro (Binary Search)

function introTutorial(target, arr) {
  let [start, end] = [
      0,
      arr.length - 1
  ];
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== target) {
      if (arr[start] === target) return start;
      if (arr[end] === target) return end;

      if (target < arr[mid]) end = mid;
      else start = mid;

      mid = Math.floor((start + end) / 2);
  }

  return mid;
}

// Passed 4 test cases successfully.
