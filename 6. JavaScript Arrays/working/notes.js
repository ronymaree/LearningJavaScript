// const notes = ['Note 1', 'Note 2', 'Note 3']

/* 
console.log(notes)
console.log(notes.length) // get the number of items in the array

console.log(notes[1]) // 1 is the index - this is how to access an array

console.log(notes[notes.length - 1]) // get the last item in the array

// Make changes to 'notes'

notes.pop() // Removes the last position of the array (Note 3 will be removed)
console.log(notes.pop()) // Print the item to be removed, and then remove it (the last one)
notes.push('My new Note') // Adds to the last item of the array

console.log(notes.shift()) // removes the first item of the array

notes.unshift('My first Note') // adds to the first position of the array
 */

// splice allows us to add or remove an item from our array
// notes.splice(1, 1) // (1, 1, 0)(array index, number of item/s to remove, add an item at this position )
// notes.splice(1, 0, 'This is the new second item') // as from the first item, its going to add a new item

// notes[2] = 'This is now the new note 3' // same as 'notes.splice(1, 1 'This is the new note 3')'

// // LOOPING__________________________________________________________


// notes.forEach(function (item, index){
//     console.log(index)
//     console.log(item)
// })

// For Loop
// Counting... 1 to num of

// for (let count = 0; count <= 2; count = count + 1 ) { // (initialazer, condition{how long the loop should run}, expression or count ++)
//     console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }
// console.log(notes)

// console.log(notes.indexOf('This is now the new note 3')) // outputs the index of the searched item

 const note1 = [{
    title: 'My next Vacation',
    body: 'I would like to go to Mauritius'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}
]

const findNote = function(notes, noteTitle) {

}

const note = findNote(note, 'Office modofication')
console.log(note)

/* console.log(note1.length)
console.log(note1)

console.log(note1.indexOf({}))

const index = note1.findIndex(function(note, index){
    console.log(note)
    return note.title === 'Habbits to work on'
})

console.log(index) 
 */
