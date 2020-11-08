// Minimum Distances

function minimumDistances(a) {
  let minDupeDistance = Infinity;

  const lastSeen = {};
  for (let i = 0; i < a.length; i++) {
      const current = a[i];
      if (lastSeen[current] !== undefined) {
          const currDupeDistance = i - lastSeen[current];
          minDupeDistance = Math.min(minDupeDistance, currDupeDistance);
      }
      lastSeen[current] = i;
  }

  return minDupeDistance === Infinity ? -1 : minDupeDistance;
}

// Passed 10 test cases successfully.
