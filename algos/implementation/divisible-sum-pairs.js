// Divisible Sum Pairs

function divisibleSumPairs(n, k, ar) {
  const reversed = ar.reverse();

  let pairs = 0;
  const seenMods = {};
  reversed.forEach((num, index) => {
      const currentMod = num % k;
      const wantedPartner = currentMod === 0
          ? 0
          : k - currentMod;
      pairs += seenMods[wantedPartner] || 0;

      if (seenMods[currentMod] === undefined) {
          seenMods[currentMod] = 1;
      } else {
          seenMods[currentMod] += 1;
      }
  });

  return pairs;
}

// Passed 20 test cases successfully.
