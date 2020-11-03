// The Power Sum

function powerSum(X, N, stepUp = 1) {
  const newX = X - stepUp ** N;
  if (newX === 0) {
      return 1;
  } else if (newX < 0) {
      return 0;
  } else {
      return powerSum(X, N, stepUp + 1) + powerSum(newX, N, stepUp + 1);
  }
}

// Passed 6 test cases successfully.
