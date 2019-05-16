// Undefined for Variable
let nameDefined = 'Jen' // We are declaring a variable called 'nameDefined' and the Value 'Jen' is assigned to it

let name // Javascript assigns this variable the value 'undefined' by default - where 'undefined' is a reserved keyword

if (name === undefined) { // 'undefined' is a reserved keyword
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for functions arguments

let square = function (num) {
    console.log(num)
}

square() // this will print 'undefined' - no value is assigned to the argument

//

let age = 27

age = undefined // clears the value of 'age'. Javascript has created a way for this by using the null valur

age = null

console.log(age) // 