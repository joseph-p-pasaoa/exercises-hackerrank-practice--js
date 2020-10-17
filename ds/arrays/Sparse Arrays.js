// Sparse Arrays

function matchingStrings(strings, queries) {
   const counts = {};
   for (let string of strings) {
      if (counts[string] === undefined) {
         counts[string] = 1;
      } else {
         counts[string] += 1;
      }
   }

   return queries.map(query => counts[query] || 0);
}

// Passed 13 test cases successfully.
