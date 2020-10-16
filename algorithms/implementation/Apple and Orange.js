// Apple and Orange


function countApplesAndOranges(s, t, appleTree, orangeTree, apples, oranges) {
   const [houseStart, houseEnd] = [s, t];
   let [houseApples, houseOranges] = [0, 0];

   apples.forEach(drop => {
      const appleLoc = appleTree + drop;
      if (houseStart <= appleLoc && appleLoc <= houseEnd) {
         houseApples += 1;
      }
   });
   oranges.forEach(drop => {
      const orangeLoc = orangeTree + drop;
      if (houseStart <= orangeLoc && orangeLoc <= houseEnd) {
         houseOranges += 1;
      }
   });

   console.log(houseApples);
   console.log(houseOranges);
   return;
}

// Passed 12 test cases successfully.
