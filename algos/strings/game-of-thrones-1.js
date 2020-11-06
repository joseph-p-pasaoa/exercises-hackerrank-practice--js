// Game of Thrones 1

function gameOfThrones(s) {
  const oddLetters = {};
  for (let letter of s) {
      if (oddLetters[letter] === true) {
          oddLetters[letter] = false;
      } else {
          oddLetters[letter] = true;
      }
  }
  
  let isOneOddAlready = false;
  for (let letter in oddLetters) {
      if (oddLetters[letter] === true) {
          if (isOneOddAlready === false) {
              isOneOddAlready = true;
          } else {
              return 'NO';
          }
      }
  }

  return 'YES';
}

// Passed 21 test cases successfully.
