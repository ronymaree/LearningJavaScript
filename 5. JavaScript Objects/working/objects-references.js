let myAccount = {
    name: 'Rony Maree',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}




// Challenge
// AddIncome

// Reset Account

// getAccountSummary
// Account for Rony has $900, $1000 in income. $100 in expenses

let addIncome = function (account, amount) {
    account.income = account.income + amount

}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account){
    let accountSummary = account.income - account.expenses
    return `Account for ${account.name} has $${accountSummary}, $${account.income} in income. $${account.expenses} in expenses `
} 
console.log(myAccount)
addIncome(myAccount, 1000)
console.log(myAccount)
addExpense(myAccount, 50)
console.log(myAccount)
addExpense(myAccount, 50)
console.log(myAccount)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(myAccount)
console.log(getAccountSummary(myAccount))

/* 
{ name: 'Rony Maree', expenses: 0, income: 0 }
{ name: 'Rony Maree', expenses: 0, income: 1000 }
{ name: 'Rony Maree', expenses: 50, income: 1000 }
{ name: 'Rony Maree', expenses: 100, income: 1000 }
Account for Rony Maree has $900, $1000 in income. $100 in expenses 
{ name: 'Rony Maree', expenses: 0, income: 0 }
Account for Rony Maree has $0, $0 in income. $0 in expenses  
*/