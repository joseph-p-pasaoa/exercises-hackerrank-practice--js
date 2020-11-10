// The Hurdle Race

function hurdleRace(k, heights) {
  let maxHeight = -Infinity;
  heights.forEach(height => maxHeight = Math.max(height, maxHeight));

  return Math.max(maxHeight - k, 0);
}

// Passed 5 test cases successfully.
