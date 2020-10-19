// Left Rotation

function rotateLeft(d, arr) {
  const output = [...arr];
  const length = arr.length;
  const numFromLeft = d % length;

  const moving = output.splice(0, numFromLeft);

  return [...output, ...moving];
}

// Passed 10 test cases successfully.
