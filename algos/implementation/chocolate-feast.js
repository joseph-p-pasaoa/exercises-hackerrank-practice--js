// Chocolate Feast

function chocolateFeast(budget, cost, wrapperTradeInCost) {
  let counter = 0;

  const chocsBought = Math.floor(budget / cost);
  counter += chocsBought;
  let wrappersOwned = chocsBought;

  while (wrappersOwned >= wrapperTradeInCost) {
      const moreChocs = Math.floor(wrappersOwned / wrapperTradeInCost);
      counter += moreChocs;
      wrappersOwned -= moreChocs * wrapperTradeInCost;
      wrappersOwned += moreChocs;
  }

  return counter;
}

// Passed 11 test cases successfully.
