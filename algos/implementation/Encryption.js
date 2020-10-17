// Encryption

function encryption(s) {
   const root = s.length ** .5;
   const [rows, cols] = (root % 1 === 0)
      ? [root, root]
      : [Math.floor(root), Math.ceil(root)];

   let input = s;
   let output = '';
   for (let offset = 0; offset < cols; offset++) {
      for (let row = 0; row < input.length; row += cols) {
         if (input[row + offset] === undefined) continue;

         const currentChar = input[row + offset];
         output += currentChar;
      }
      output += ' ';
   }

   return output.trim();
}

// Passed all 13 test cases.
