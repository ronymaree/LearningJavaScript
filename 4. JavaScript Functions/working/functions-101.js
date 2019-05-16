// Function - input(argument/s), code, output (return value)

let greetUser = function () {
    console.log('Welcome User!')
}

greetUser()


let square = function (num) {
    let result = num * num
    return(result)
}

let add = function (num1, num2) {
    let result = num1 + num2
    return(result)
}

let sub = function (num1, num2) {
    let result = num1 - num2
    return(result)
}

let mul = function (num1, num2) {
    let result = num1 * num2
    return(result)
}

let div = function (num1, num2) {
    let result = num1 / num2
    return(result)
}

console.log(square(3))
console.log(add(3,2))


// Challenge - Convert Fahrenheit to Celcius


let convertFahrenheitToCelcius = function(fahrenheit) {
    let celcius = (fahrenheit - 32)*(5/9)
    return(celcius)
}

let value1 = convertFahrenheitToCelcius(32)
let value2 = convertFahrenheitToCelcius(68)

console.log(value1)
console.log(value2)