// 3D Surface Area

function surfaceArea(A) {
   let area = 0;
   let outside = 0;
   let inside = 0;

   const H = A.length;
   for (let row = 0; row < H; row++) {
      const W = A[row].length;

      for (let col = 0; col < W; col++) {
         area++;
         const height = A[row][col];

         const [isTop, isBottom, isLeft, isRight] = [
            row === 0,
            row === H - 1,
            col === 0,
            col === W - 1
         ];
         [isTop, isBottom, isLeft, isRight].forEach(bool => {
            if (bool) outside += height;
         });

         inside += wallsFromNeighbors(A, row, col);
      }
   }

   return area * 2 + outside + inside;
}

function wallsFromNeighbors(A, row, col) {
   const [curr, up, down, left, right] = [
      A[row][col],
      A[row - 1] && A[row - 1][col],
      A[row + 1] && A[row + 1][col],
      A[row][col - 1],
      A[row][col + 1]
   ];

   let walls = 0;
   if (up && up > curr) walls += up - curr;
   if (left && left > curr) walls += left - curr;
   if (right && right > curr) walls += right - curr;
   if (down && down > curr) walls += down - curr;

   return walls;
}

// Passed all 26 test cases successfully.
