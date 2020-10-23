// Insertion Sort, Part 1

function insertionSort1(n, arr) {
  const [last, nextToLast] = [
      arr[n - 1],
      arr[n - 2]
  ];
  if (last > nextToLast) return arr;

  const sorted = [...arr];
  const moving = sorted[sorted.length - 1];
  for (let i = sorted.length - 1; i >= 0; i--) {
      let [curr, left] = [ sorted[i], sorted[i - 1] ];
      if (left > curr) {
          sorted[i] = sorted[i - 1];
          console.log(sorted.join(' '));
          sorted[i - 1] = moving;
      } else {
          console.log(sorted.join(' '));
          return;
      }
  }
}

// Passed 4 test cases successfully.
