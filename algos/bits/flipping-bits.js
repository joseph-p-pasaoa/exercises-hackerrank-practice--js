// Flipping Bits

function flippingBits(N) {
  const invertedBin = (~N >>> 0).toString(2);
  return parseInt(invertedBin, 2);
}

// Passed 12 test cases successfully.
