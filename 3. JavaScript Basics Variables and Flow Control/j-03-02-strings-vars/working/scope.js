let varOne = 'varOne' // Global scope

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
}

console.log(varTwo) // out of the code block - so it is a local scope