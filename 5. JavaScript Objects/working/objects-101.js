let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

// change the title of the book

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge Area
// model a person; name, age, location
// Rony is 26 and lives in Hamburg, Germany
// Increase age by 1 and print message again

let person = {
    name: 'Rony',
    age: 26,
    location: 'Hamburg, Germany'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age = person.age + 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
