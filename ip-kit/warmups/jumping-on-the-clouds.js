// Jumping on the Clouds

function jumpingOnClouds(c) {
  let jumps = 0;
  let current = 0;
  const end = c.length - 1;

  while (current < end) {
      const secondCloud = c[current + 2];
      current = secondCloud === 0
          ? current + 2
          : current + 1
      jumps++;
  }

  return jumps;
}

// Passed 9 test cases successfully.
