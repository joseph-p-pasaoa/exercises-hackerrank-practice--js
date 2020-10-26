// Drawing Book

function pageCount(totalPages, target) {
  const lastIndex = Math.floor(totalPages / 2);
  const targetIndex = Math.floor(target / 2);

  const [turnsFromFront, turnsFromBack] = [
      targetIndex,
      lastIndex - targetIndex
  ];

  return Math.min(turnsFromFront, turnsFromBack);
}

// Passed 27 test cases successfully.
