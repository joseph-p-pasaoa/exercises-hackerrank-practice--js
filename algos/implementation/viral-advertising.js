// Viral Advertising

function viralAdvertising(n) {
  let currentRecipients = 5;
  let totalLikes = 0;

  for (let day = 1; day <= n; day++) {
      const currentLikes = Math.floor(currentRecipients / 2);
      totalLikes += currentLikes;
      currentRecipients = currentLikes * 3;
  }

  return totalLikes;
}

// Passed 5 test cases successfully.
