/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  let mp = new Map();
  for(var i = 0; i<transactions.length;i++){
    mp.set(transactions[i].category, 
      !mp.has(transactions[i].category) 
      ? transactions[i].price : 
      mp.get(transactions[i].category) + 
      transactions[i].price);
  }

  for(let [key,value] of mp){
    var obj = {};
    obj["category"] = key;
    obj["totalSpent"] = value;
    ans.push(obj);
  }
  return ans;
}

console.log( calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
]));
module.exports = calculateTotalSpentByCategory;
