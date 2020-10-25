// Counting Valleys

function countingValleys(steps, path) {
  let valleys = 0;
  let alt = 0;
  let isJustUnderSeaLevel = false;
  path.split('').forEach(type => {
      if (type === 'U') alt++;
      else alt--;

      if (isJustUnderSeaLevel && alt === 0) {
          valleys++;
      }

      if (alt === -1) {
          isJustUnderSeaLevel = true;
      } else {
          isJustUnderSeaLevel = false;
      }
  });

  return valleys;
}

// Passed 22 test cases successfully.
