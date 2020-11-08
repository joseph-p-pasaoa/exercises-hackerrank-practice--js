// Modified Kaprekar Numbers

function kaprekarNumbers(start, end) {
  const kNums = [];

  for (let num = start; num <= end; num++) {
      if (isKNum(num)) kNums.push(num);
  }

  console.log(
      kNums.length > 0
          ? kNums.join(' ')
          : 'INVALID RANGE'
  );
  return;
}

function isKNum(num) {
  let square = (num ** 2).toString();

  const rStartIndex = square.length % 2 === 0
      ? square.length / 2
      : Math.floor(square.length / 2);
  const [l, r] = [
      parseInt( square.slice(0, rStartIndex) ) || 0,
      parseInt( square.slice(rStartIndex) )
  ];

  return num === l + r;
}

// Passed 7 test cases successfully.
