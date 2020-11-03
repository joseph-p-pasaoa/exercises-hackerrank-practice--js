// Permuting Two Arrays

function twoArrays(threshold, A, B) {
  const ascendingA = A.sort((a, b) => a - b);
  const descendingB = B.sort((a, b) => b - a);
  const bestChance = ascendingA.every((num, i) => {
      const indicesSum = num + descendingB[i];
      return indicesSum >= threshold;
  });

  return bestChance ? 'YES' : 'NO';
}

// Passed 11 test cases successfully.
