const programmers = [
    "Dennis Ritchie",
    "Brian Kernighan",
    "Ken Thompson",
    "Linus Torvalds",
    "Bjarne Stroustrup",
    "Tim Berners-Lee",
    "Donald Knuth",
    "Alan Turing",
    "Mark Zuckerberg",
    "Bill Gates",
    "Larry Page",
    "Elon Musk",
    "Jack Dorsey",
    "Satoshi Nakamoto",
    "Ada Lovelace",
    "Grace Hopper",
    "Dan Ambramov",
    "Jordan Walke",
    "Ryan Dahl",
    "David Heinemeier Hansson",
    "Guido van Rossum",
    "Yukihiro Matsumoto",
    "Sergey Brin",
    "Lyndsey Scott",
    "Abhinav Asthana",
    "Abhijit Kane",
    "Ankit Sobti",
    "Loi Tran",
    "Charles Lee",
    "Tuan Nguyen",
    "Tan Vo",
  ];

  const user = {
    currentBalance: 5000,
    transactionsMonthToDate: [{}],
  };
  
  user.transactionsMonthToDate = [
    {
      amount: 3000,
      type: "deposit",
      category: "Salary - Full Time"
    },
    { category: "Dining", amount: 50, type: "withdrawal" },
    { category: "Dining", amount: 100, type: "withdrawal" },
    { category: "Rent", amount: 2000, type: "withdrawal" },
    { category: "Groceries", amount: 250, type: "withdrawal" },
    {
      amount: 250,
      type: "withdrawal",
      category: "Transportation",
    },
    {
      amount: 250,
      type: "withdrawal",
      category: "Health",
    },
    {
      amount: 50,
      type: "withdrawal",
      category: "Travel - Fuel",
    },
    { category: "Living", amount: 650, type: "withdrawal" },
    { category: "Groceries", amount: 500, type: "withdrawal" },
    { category: "Living", amount: 250, type: "withdrawal" },
    { category: "Living", amount: 250, type: "withdrawal" },
    {
      amount: 5000,
      type: "deposit",
      category: "Salary - Part Time",
    },
    { category: "Groceries", amount: 450, type: "withdrawal" },
    {
      amount: 58,
      type: "withdrawal",
      category: "Transportation",
    },
    {
      amount: 50,
      type: "withdrawal",
      category: "Health",
    },
    {
      amount: 100,
      type: "withdrawal",
      category: "Transportation",
    },
    {
      amount: 150,
      type: "withdrawal",
      category: "Transportation",
    },
    { category: "Groceries", amount: 100, type: "withdrawal" },
    {
      amount: 100,
      type: "withdrawal",
      category: "Entertainment",
    },
    {
      amount: 500,
      type: "withdrawal",
      category: "Entertainment",
    },
    { category: "Groceries", amount: 300, type: "withdrawal" },
    {
      amount: 500,
      type: "withdrawal",
      category: "Travel - Airline",
    },
    {
      amount: 1500,
      type: "withdrawal",
      category: "Travel - Hotel",
    },
    {
      amount: 50,
      type: "withdrawal",
      category: "Travel - Fuel",
    },
    { category: "Groceries", amount: 200, type: "withdrawal" },
    {
      amount: 500,
      type: "deposit",
      category: "Portfolio Dividends",
    },
    {
      amount: 100,
      type: "withdrawal",
      category: "Entertainment",
    },
    {
      amount: 100,
      type: "withdrawal",
      category: "Travel - Fuel",
    },
    { category: "Groceries", amount: 200, type: "withdrawal" },
    {
      amount: 100,
      type: "withdrawal",
      category: "Entertainment",
    },
    {
      amount: 100,
      type: "withdrawal",
      category: "Health",
    },
  ];

  //Use a for loop to print to the screen the transaction history for the month in this format:

  function transactionHistory(){
    console.log(`Balance:`, '$' + user.currentBalance)
    console.log(`Transaction History:`)
      for(let i = 0; i < user.transactionsMonthToDate.length; i ++){
        if (user.transactionsMonthToDate[i].type == "withdrawal"){
        user.currentBalance-= user.transactionsMonthToDate[i].amount
        console.log(`- You withdrew ${user.transactionsMonthToDate[i].amount}. The new balance is ${user.currentBalance}.`)
        }else if (user.transactionsMonthToDate[i].type == "deposit"){
        user.currentBalance+= user.transactionsMonthToDate[i].amount
        console.log(`- You deposited ${user.transactionsMonthToDate[i].amount}. The new balance is ${user.currentBalance}.`)
    }}}
//   transactionHistory();

//Define a function that returns the sum of withdrawals.
function totalWithdrawal(){
      const withdrawal = user.transactionsMonthToDate.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount * (currentValue.type == "withdrawal")
      }, 0)
      return `the sum of withdrawal is ${withdrawal}`
    }
// console.log(totalWithdrawal())

////Define a function that returns the sum of deposits.
// function totalDeposit(){
//     const deposit = user.transactionsMonthToDate.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue.amount * (currentValue.type == "deposit")
//     }, 0)
//     return `the sum of deposits is ${deposit}` 
// }
// console.log(totalDeposit())

//Define a function that returns the total number of deposits.
function numberDeposit(){
    const deposit = user.transactionsMonthToDate.filter((element) =>element.type == "deposit")
        return `total number of deposits is ${deposit.length}`
}
// console.log(numberDeposit())

// Define a function that returns the total number of withdrawals.
function numberWithdraw(){
    const withdraw = user.transactionsMonthToDate.filter((element) => element.type == "withdrawal")
        return `total number of withdraw is ${withdraw.length}`
}
// console.log(numberWithdraw())

// Define a function that returns the difference between deposits and withdrawals.
function difference(){
    const withdrawal = user.transactionsMonthToDate.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount * (currentValue.type == "withdrawal")
      }, 0)
    const deposit = user.transactionsMonthToDate.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount * (currentValue.type == "deposit")
    }, 0)
    const difference = withdrawal - deposit;
    return `the difference between deposits and withdrawals is ${difference}`; 
}
// console.log(difference())

// Define a function that returns a new balance for the next month.

function newBalance() {
    const newBalance = user.transactionsMonthToDate.reduce((accumulator, currentValue) =>
        accumulator + currentValue.amount * (currentValue.type === 'deposit') - currentValue.amount * (currentValue.type === 'withdrawal')
      , 5000);
    return newBalance;
  }
  
//   console.log(newBalance());

// Define a function that returns the sum of the groceries.
function sumOfGroceries(){
    const grocery = user.transactionsMonthToDate.reduce((accumulator, currentValue) =>
    accumulator + currentValue.amount * (currentValue.category === "Groceries"), 0)
    return grocery;
}
// console.log(sumOfGroceries());

// Define a function that returns the sum of the entertainment.
function sumOfEntertainment(){
    const entertainment = user.transactionsMonthToDate.reduce((accumulator, currentValue) => 
    accumulator + currentValue.amount * (currentValue.category === "Entertainment"), 0)
    return entertainment
}
// console.log(sumOfEntertainment())

//Define a function that returns the sum of the travel.
function sumOfTravel(){
    const travel = user.transactionsMonthToDate.reduce ((accumulator, currentValue) => 
    accumulator + currentValue.amount * (currentValue.category === "Travel - Fuel"), 0)
    return travel;
}
// console.log(sumOfTravel())

// Define a function that given a conversion rate of 23000vnd to 1usd returns
//  if the account spent more usd than vnd was deposited into the account for the month.