let name = '  Rony Maree  '
  
// Length property 

console.log(name.length)

// Convert to UpperCase
console.log(name.toUpperCase())

// Includes method --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
let password = 'abc123password08'
console.log(password.includes('password'))

// Trim -- removes extra spaces
console.log(name.trim())


// Challenge Area

// isValidPassword
// length is more than 8 - and it doesn't contain the word password

let isValidPassword = function (password) {
   if  (!password.includes('password') && password.length > 8) {
       return true
   }else {
       return false
   }
   // or return !password.includes('password') && password.length > 8
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('passworde'))