let temp = 130

/* if (temp >= 60) {
    if (temp <= 90) {
        
    }
} */

// Logical And Operator

if (temp >= 60 && temp <= 90) { // if(boolean statement && boolean statement) ---> BOTH boolean statements have to be true to run the function
    console.log('It is pretty outside')
} else if (temp <= 0 || temp >= 120) { // At least ONE of the boolean statements have to be true to execute the function
    console.log('Do not go outside')
} else {
    console.log('Do what you want')
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer Vegan Dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Vegan and Meat')
} else {
    console.log("Whole Menu")
}