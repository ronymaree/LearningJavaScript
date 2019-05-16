const toDo = ['make tea', 'make breakfast', 'make lunch', 'make cake', 'eat all']

console.log(`You have`)

let arrayLength = toDo.length-1
let count = 0
console.log(arrayLength)
console.log(`Todo: ${toDo[0]}`)
console.log(`Todo: ${toDo[1]}`)
console.log(`Todo: ${toDo[arrayLength]}`)

//challenge Delete the third item
// Add a new item onto the end
// remove the first item from the list

toDo.splice(2,1)
console.log(toDo)
toDo.push('This is the new item')
console.log(toDo)
toDo.shift()
console.log(toDo)

// Print: 1. The first item
// 2. The second item ...

toDo.forEach(function (todo, index){
    let indexItem = index + 1
    console.log(`${indexItem}. ${todo}`)

})

for (count = 0; count < (toDo.length); count++) {
    console.log(`${count + 1}. ${toDo[count]}`)
}

