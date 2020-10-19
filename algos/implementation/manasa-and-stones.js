// Manasa and Stones

function stones(n, a, b) {
   if (n === 1) return 0;
   const [lowDiff, highDiff] = [
      Math.min(a, b),
      Math.max(a, b)
   ];

   const postStones = n - 1;
   if (a === b) return [a * postStones];
   const totals = [];
   for (let numA = postStones; numA >= 0; numA--) {
      const numB = postStones - numA;
      const [lowDiffSum, highDiffSum] = [
         lowDiff * numA,
         highDiff * numB
      ];

      totals.push(lowDiffSum + highDiffSum);
   }

   return totals;
}

// All 13 test cases successfully passed.
