/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const catSpends = {};

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i]['category'] in catSpends) {
      catSpends[transactions[i]['category']] += transactions[i]['price'];
    } else {
      catSpends[transactions[i]['category']] = transactions[i]['price'];
    }
  }

  const result = [];
  for (const category in catSpends) {
    result.push({
      category: category,
      totalSpent: catSpends[category]
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
