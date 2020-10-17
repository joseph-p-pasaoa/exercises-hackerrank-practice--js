// CamelCase

function camelcase(s) {
   let caps = 0;
   for (let char of s) {
      if (char === char.toUpperCase()) caps++;
   }

   return caps + 1;
}

// Passed 21 test cases successfully.
