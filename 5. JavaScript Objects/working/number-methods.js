let num = 103.941

console.log(num.toFixed(2)) // output 103.94

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 1
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//console.log(randomNum)

// challenge area
// 1-5 - true if correct and false if not correct

let makeGuess = function (num) {
  let min = 1
  let max = 5
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(randomNum)
  console.log(num)
  
  
  return (randomNum === num)
}

console.log(makeGuess(1))