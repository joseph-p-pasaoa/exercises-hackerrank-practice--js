// Insertion Sort, Part 2

function insertionSort2(n, arr) {
  let result = [...arr];
  for (let i = 2; i <= n; i++) {
      const untouched = result.slice(i, n);
      const sorted = sort(result.slice(0, i));
      result = [...sorted, ...untouched];
      console.log(result.join(' '));
  }
  return;
}

function sort(slice) {
  const sorted = [...slice];
  const [last, nextToLast] = [
      sorted[sorted.length - 1],
      sorted[sorted.length - 2]
  ];
  if (last > nextToLast) return sorted;

  const moving = sorted[sorted.length - 1];
  for (let i = sorted.length - 1; i >= 0; i--) {
      let [curr, left] = [ sorted[i], sorted[i - 1] ];
      if (left > curr) {
          sorted[i] = sorted[i - 1];
          sorted[i - 1] = moving;
      } else {
          break;
      }
  }

  return sorted;
}

// Passed 6 test cases successfully.
