// Maximizing XOR

function maximizingXor(l, r) {
  let maxXOr = -Infinity;
  for (let low = l; low <= r; low++) {
      for (let iterator = low; iterator <= r; iterator++) {

          const currentXOr = low ^ iterator;
          maxXOr = Math.max(maxXOr, currentXOr);

      }
  }

  return maxXOr;
}

// Passed 14 test cases successfully.
