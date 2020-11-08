// Running Time of Algorithms

function runningTime(arr) {
  let shifts = 0;

  let result = [...arr];
  for (let i = 2; i <= arr.length; i++) {
      const untouched = result.slice(i, arr.length);
      const { sorted, currShifts } = compare(result.slice(0, i));
      result = [...sorted, ...untouched];
      shifts += currShifts;
  }

  return shifts;
}

function compare(slice) {
  const sorted = [...slice];
  const [last, nextToLast] = [
      sorted[sorted.length - 1],
      sorted[sorted.length - 2]
  ];
  if (last > nextToLast) return { sorted, currShifts: 0 };

  let currShifts = 0;
  const moving = sorted[sorted.length - 1];
  for (let i = sorted.length - 1; i >= 0; i--) {
      let [curr, left] = [ sorted[i], sorted[i - 1] ];
      if (left > curr) {
          sorted[i] = sorted[i - 1];
          sorted[i - 1] = moving;
          currShifts++;
      } else {
          break;
      }
  }

  return { sorted, currShifts };
}

// Passed 7 test cases successfully.
