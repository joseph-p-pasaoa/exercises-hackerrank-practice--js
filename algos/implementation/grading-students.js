// Grading Student

function gradingStudents(grades) {
  return grades.map(grade => {
      if (grade < 38) return grade;

      const distFromLowerMultipleOf5 = grade % 5;
      if (distFromLowerMultipleOf5 < 3) {
          return grade;
      } else {
          return distFromLowerMultipleOf5 === 3
              ? grade + 2
              : grade + 1
      }
  });
}

// Passed 12 test cases successfully.
