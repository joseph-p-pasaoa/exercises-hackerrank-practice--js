// Cats and a Mouse

function catAndMouse(a, b, mouse) {
  const [aDist, bDist] = [
      Math.abs(mouse - a),
      Math.abs(mouse - b)
  ];

  if (aDist < bDist) return 'Cat A';
  else if (bDist < aDist) return 'Cat B';
  else return 'Mouse C';
}

// Passed 2 test cases successfully.
