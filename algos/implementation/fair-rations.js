// Fair Rations

function fairRations(B) {
  let oddShifts = 0;

  let lastOddIndex = -1;
  for (let i = 0; i < B.length; i++) {
      const current = B[i];
      if (current % 2 === 1) {
          
          if (lastOddIndex === -1) {
              lastOddIndex = i;
          } else {
              oddShifts += i - lastOddIndex;
              lastOddIndex = -1;
          }

      }
  }

  return lastOddIndex !== -1
      ? 'NO'
      : oddShifts * 2;
}

// Passed 22 test cases successfully.
