let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A People History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }

   
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge area
// Create function - take fahrenheit in - return object with all three



let myTemp = {
    fahrenheit: undefined,
    celcius: undefined,
    kelvin: undefined,
}

let convertTemp = function (fahrenheit) {

    let celcius = (fahrenheit - 32)*(5/9)
    
    let kelvin = celcius + 273.15

    myTemp.fahrenheit = fahrenheit
    myTemp.celcius = celcius
    myTemp.kelvin = kelvin

    return `The temparature in Fahrenheit is ${myTemp.fahrenheit}, and when converted to celcius is ${myTemp.celcius}, and ${myTemp.kelvin} in Kelvin.`
       
}

console.log(convertTemp(39))

// Solution

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5/9),
        celcius: (fahrenheit - 32) * (5/9)
    }
}

let temps = convertFahrenheit(74)
console.log(temps)