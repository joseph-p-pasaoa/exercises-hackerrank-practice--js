// Sales By Match

function sockMerchant(n, ar) {
  let pairs = 0;
  const found = {};
  for (let sock of ar) {
      if (found[sock] === undefined) {
          found[sock] = 1;
      } else {
          found[sock] += 1;
          if (found[sock] % 2 === 0) pairs++;
      }
  }

  return pairs;
}

// Passed 9 test cases successfully.
