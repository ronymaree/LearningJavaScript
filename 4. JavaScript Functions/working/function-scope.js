// Global Scope (convertFahrenheitToCelcius, value1, value2)
    // Local Scope (fahrenheit, celcius)
        //Local Scope (isFreezing)

let convertFahrenheitToCelcius = function(fahrenheit) {
    let celcius = (fahrenheit - 32)*(5/9)

    if (celcius <=0) {
        let isFreezing = true
    }

    return(celcius)
}

let value1 = convertFahrenheitToCelcius(32)
let value2 = convertFahrenheitToCelcius(68)

console.log(value1)
console.log(value2)