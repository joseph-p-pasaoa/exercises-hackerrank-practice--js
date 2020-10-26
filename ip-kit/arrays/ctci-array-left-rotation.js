// Arrays: Left Rotation

function rotLeft(arr, d) {
  const numToFlip = d % arr.length;
  const staying = [...arr];
  const moving = staying.splice(0, numToFlip);

  return [...staying, ...moving];
}

// Passed 11 test cases successfully.
