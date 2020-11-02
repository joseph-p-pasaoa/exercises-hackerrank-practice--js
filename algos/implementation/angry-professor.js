// Angry Professor

function angryProfessor(k, a) {
  let present = 0;
  for (let time of a) {
      if (time <= 0) present++;
      if (present >= k) return 'NO';
  };
  
  return 'YES';
}

// Passed 12 test cases successfully.
