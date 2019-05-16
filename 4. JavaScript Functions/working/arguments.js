// Multiple Arguments (parameters)

let add = function (num1, num2) {
    let sum = num1 + num2
    return sum

    // or return num1 + num2
}

console.log(add(3,4))

// Default Arguments

let getScoreText = function (name, score = 0) {
    // return 'Name: ' + name + ' -Score: ' + score
    return `Name:  ${name} Score: ${score}`
}

console.log(getScoreText('Rony', 100))

// challenge area

// Tip Calculator

// total for the bill, tip percentage(20%)

let calculateTip = function (total, tipPercentage = .2) {
    return 'Total: ' + total + ' Tip:' + (total*tipPercentage)
}
console.log(calculateTip(100, .1))

console.log('Rony') // "Rony" has no difference. Find whats best for you and stick with it for code clarity's sake only

let name = 'Jen'
console.log(`Hey you ${name}!`) // `` is used to declare template string - easier to rearrange things

// Challenge Area

// Output:  A 25% tip on $40 would be $10

let recalculateTip = function (total, tipPercentage = .25) {
    let percent = tipPercentage * 100
    let tip = total*tipPercentage
    return `A ${percent}% tip on $${total} would be $${tip}` // good practice :)
    // or return `A ${tipPercentage * 100}% tip on $${total} would be $${total*tipPercentage}`
}
console.log(recalculateTip(2345, .3))