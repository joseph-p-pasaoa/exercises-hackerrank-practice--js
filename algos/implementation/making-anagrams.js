// Making Anagrams

function makingAnagrams(s1, s2) {
  const counts1 = getLetterCount(s1);
  const counts2 = getLetterCount(s2);

  let deletions = 0;
  for (let char in counts1) {
      if (counts2[char]) {
          deletions += Math.abs(counts1[char] - counts2[char]);
      } else {
          deletions += counts1[char];
      }
  }
  for (let char in counts2) {
      if (counts1[char] === undefined) {
          deletions += counts2[char];
      }
  }

  return deletions;
}

function getLetterCount(string) {
  const counts = {};
  for (let char of string) {
      if (counts[char] === undefined) {
          counts[char] = 1;
      } else {
          counts[char] += 1;
      }
  }

  return counts;
}

// Passed 16 test cases successfully.
