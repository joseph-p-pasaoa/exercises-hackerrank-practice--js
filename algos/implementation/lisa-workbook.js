// Lisa's Workbook

function workbook(n, k, chapters) {
  let specials = 0;

  let pageNum = 1;
  for (let i = 0; i < chapters.length; i++) {
      const totalProblems = chapters[i];
      let minProblemNum = 1;
      while (minProblemNum <= totalProblems) {

          const maxProblemNum = Math.min(minProblemNum + k - 1, totalProblems);
          const doNumsAlign =
              minProblemNum <= pageNum &&
              pageNum <= maxProblemNum;
          if (doNumsAlign) {
              specials++;
          }

          minProblemNum = minProblemNum + k;
          pageNum++;
      }
  }

  return specials;
}

// Passed 11 test cases successfully.
