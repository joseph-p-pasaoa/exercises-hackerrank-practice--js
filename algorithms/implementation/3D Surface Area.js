/*
3D Surface Area

Madison, is a little girl who is fond of toys. Her friend Mason works in a toy manufacturing factory.
Mason has a 2D board A of size H x W with H rows and W columns. The board is divided into cells of
size 1 x 1 with each cell indicated by it's coordinate (i, j). The cell (i, j) has an integer Aij
written on it. To create the toy Mason stacks Aij number of cubes of size 1 x 1 x 1 on the cell (i, j).

Given the description of the board showing the values of Aij and that the price of the toy is equal to
the 3d surface area find the price of the toy.

Input Format
The first line contains two space-separated integers H and W the height and the width of the board
respectively.
The next H lines contains W space separated integers. The j-th integer in i-th line denotes Aij.

Constraints
1 <= H, W <= 100
1 <= Aij <= 100

Output Format
Print the required answer, i.e the price of the toy, in one line.

Sample Input 0
1 1
1

Sample Output 0
6

The surface area of 1 x 1 x 1 cube is 6.

--

Sample Input 1
3 3
1 3 4
2 2 3
1 2 4

Sample Output 1
60
*/

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

// Passed 26 test cases successfully.
