// Repeated String

function repeatedString(s, n) {
  const sLen = s.length;
  const [repetitions, sliceLen] = [
      Math.floor(n / sLen),
      n % sLen
  ];

  let [stringAs, sliceAs] = [0, 0];
  for (let i = 0; i < sLen; i++) {
      const char = s[i];
      if (char === 'a') {
          stringAs++;
          if (i < sliceLen) sliceAs++;
      }
  }

  return repetitions * stringAs + sliceAs;
}

// Passed 23 test cases successfully.
