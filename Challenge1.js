//challenge 1
//create a simple expense tracker 


//source code
let Account = { //create the Account objects
    name: 'Zude',
    expense: 0,
    income: 0
}

let addExpense = function (account, amount) { //create the function for expense
    account.expense = account.expense + amount
    console.log(account)
}

let addIncome = function (account, amount) { //create the function for income
    account.income = account.income + amount
    console.log(account)
}

let getAccountSummary = function (Account) { //create the function for the account summary
    return `Account for ${Account.name} has $${Account.amount=Account.income+Account.expense}. $${Account.income} .income $${Account.expense} expenses`
}
let resetAccount = function (account, amount) { //create function for resetting the account
    account.expense = 0
    account.income = 0
}

//for expense
addExpense(Account, 23.50)
console.log(Account)

//for income
addIncome(Account, 200)
console.log(Account)

//for the account summary
let summary = getAccountSummary(Account)
console.log(summary)

//for resetting the account
resetAccount(Account)
console.log(Account)
