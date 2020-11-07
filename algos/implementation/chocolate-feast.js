// Chocolate Feast

function chocolateFeast(budget, cost, wrapperTradeInCost) {
  let counter = 0;

  const chocsBought = Math.floor(budget / cost);
  counter += chocsBought;
  let wrappersInHand = chocsBought;

  while (wrappersInHand >= wrapperTradeInCost) {
      const moreChocs = Math.floor(wrappersInHand / wrapperTradeInCost);
      counter += moreChocs;
      wrappersInHand -= moreChocs * wrapperTradeInCost;
      wrappersInHand += moreChocs;
  }

  return counter;
}

// Passed 11 test cases successfully.
