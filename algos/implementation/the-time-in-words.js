// The Time in Words

const word = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'quarter',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'ninteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine'
}

function timeInWords(h, m) {
  let str = '';

  if (m === 0) {
      str = `${word[h]} o' clock`;
  } else if (m === 15) {
      str = `quarter past ${word[h]}`
  } else if (m === 30) {
      str = `half past ${word[h]}`
  } else if (m === 45) {
      str = `quarter to ${word[(h + 1) % 12]}`
  } else if (m <= 30) {
      str = m === 1
          ? `${word[m]} minute past ${word[h]}`
          : `${word[m]} minutes past ${word[h]}`
  } else {
      const invertedM = 60 - m;
      str = m === 59
          ? `${word[invertedM]} minute to ${word[(h + 1) % 12]}`
          : `${word[invertedM]} minutes to ${word[(h + 1) % 12]}`
  }

  return str;
}

// Passed 11 test cases successfully.
