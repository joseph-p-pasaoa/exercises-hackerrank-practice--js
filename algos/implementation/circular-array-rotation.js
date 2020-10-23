// Circular Array Rotation

function circularArrayRotation(arr, k, queries) {
  const toMove = k % arr.length;
  const spliceIdx = arr.length - toMove;

  const copy = [...arr];
  const moving = copy.splice(spliceIdx, toMove);
  const result = [...moving, ...copy];

  const output = queries.map(index => result[index]);
  return output;
}

// Passed 16 test cases successfully.
