// 💬 Problem: Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the i-th day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

// BestTimetoBuyandSellStock.js;

// 🔹 Example 1:

// Input:

// prices = [7, 1, 5, 3, 6, 4]

// Output:

// 5

// Explanation:

// Buy on day 2 (price = 1)

// Sell on day 5 (price = 6)

// Profit = 6 - 1 = 5

// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];

const maxProfit = (prices) => {
  let Min = prices[0];
  let MaxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (Min > prices[i]) {
      Min = prices[i];
    }
    // calculate profit if we sell today
    let profit = prices[i] - Min;

    if (profit > MaxProfit) {
      MaxProfit = profit;
    }
  }
  console.log(MaxProfit);
};

maxProfit(prices);

// Example 1:

// Input:

// prices = [7, 1, 5, 3, 6, 4]

// Output:

// 7

// Explanation:

// Buy on day 2 (price = 1), sell on day 3 (price = 5) → profit = 4

// Buy on day 4 (price = 3), sell on day 5 (price = 6) → profit = 3
// Total Profit = 4 + 3 = 7

// 🔹 Example 2:

// Input:

// prices = [1, 2, 3, 4, 5]

// Output:

// 4

// Explanation:
// Buy on day 1 and sell on day 5 → profit = 5 - 1 = 4

// 🔹 Example 3:

// Input:

// prices = [7, 6, 4, 3, 1]

// Output:

// 0

const prices1 = [7, 1, 5, 3, 6, 4];

const maxProfit1 = (prices1) => {
  let Min = Infinity;
  let buyDays = [];

  let MaxProfit = 0;

  for (let i = 0; i < prices1.length; i++) {
    if (prices1[i] > prices1[i - 1]) {
      Min = prices1[i];
    }
    let profit = prices1[i] - Min;
    console.log(profit);
    // console.log(Min);
  }
};

console.log("2nd--------");
maxProfit1(prices1);
