// Sequence Equation

function permutationEquation(p) {
  const positionMap = {};
  p.forEach((value, index) => positionMap[value] = index + 1);

  const result = [];
  for (let pos = 1; pos <= p.length; pos++) {
      const inputIndex = positionMap[pos];
      const outputIndex = positionMap[inputIndex];
      result.push(outputIndex);
  }

  return result;
}

// Passed 12 test cases successfully.
