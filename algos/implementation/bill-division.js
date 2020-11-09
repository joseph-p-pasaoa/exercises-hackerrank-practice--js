// Bill Division

function bonAppetit(bill, k, b) {
  const shortCost = bill.reduce((sum, price, i) => {
      if (i === k) return sum;

      return sum + price;
  });

  const diffPaidVsNeeded = b - shortCost / 2;
  console.log(
      diffPaidVsNeeded === 0
          ? 'Bon Appetit'
          : diffPaidVsNeeded
  );
  return;
}

// Passed 7 test cases successfully.
