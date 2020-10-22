// 2D Array

function hourglassSum(grid) {
  let maxSum = -Infinity;

  const H = grid.length - 2;
  for (let row = 0; row < H; row++) {
    const W = grid[row].length - 2;

    for (let col = 0; col < W; col++) {
      const currentSum = getSum(row, col, grid);
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

function getSum(osRow, osCol, grid) {
  const [
    topLeft, topCntr, topRight, center,
    btmLeft, btmCntr, btmRight
  ] = [
    grid[osRow][osCol],
    grid[osRow][osCol + 1],
    grid[osRow][osCol + 2],
    grid[osRow + 1][osCol + 1],
    grid[osRow + 2][osCol],
    grid[osRow + 2][osCol + 1],
    grid[osRow + 2][osCol + 2]
  ];

  const sum = [topLeft, topCntr, topRight, center,
    btmLeft, btmCntr, btmRight].reduce((sum, curr) => sum + curr);

  return sum;
}

// Passed 9 test cases successfully.
