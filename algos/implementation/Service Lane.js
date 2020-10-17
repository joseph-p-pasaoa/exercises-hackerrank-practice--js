// Service Lane

function serviceLane(n, cases, widths) {
   const widthsTallies = [0, 0, 0];
   const widthsMap = widths.map(width => {
      switch (width) {
         case 1:
            widthsTallies[0] += 1;
            break;
         case 2:
            widthsTallies[1] += 1;
            break;
         case 3:
            widthsTallies[2] += 1;
            break;
         default:
            break;
      }
      return [...widthsTallies];
   });

   const minWidths = cases.map(tuple => {
      const [startIdx, endIdx] = [ tuple[0], tuple[1] ];
      const [startTally, endTally] = [
         widthsMap[startIdx - 1] || [0, 0, 0],
         widthsMap[endIdx]
      ];
      for (let i = 0; i < 3; i++) {
         const widthDiff = endTally[i] - startTally[i];
         if (widthDiff > 0) {
            return i + 1;
         }
      }
   });

   return minWidths;
}

// Passed 12 test cases successfully.
