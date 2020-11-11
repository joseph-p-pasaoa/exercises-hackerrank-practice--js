// Beautiful Days at the Movies

function beautifulDays(start, end, k) {
  let beautifulDays = 0;
  for (let day = start; day <= end; day++) {
      if (isBeautiful(day, k)) beautifulDays++;
  }

  return beautifulDays;
}

function isBeautiful(day, k) {
  const reversed = parseInt(day
      .toString()
      .split('')
      .reverse()
      .join(''));
  const diff = Math.abs(day - reversed);

  return diff % k === 0;
}

// Passed 10 test cases successfully.
