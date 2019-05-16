// students score, total passible score,
// Eg. 15/20 --> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59



const checkResults = function(points, totalPassibleScore) {
    let grade = null
    const percentageScore = (points/ totalPassibleScore)*100
   
    if (percentageScore >=90 && percentageScore <= 100) {
        grade = 'A'
    } else if (percentageScore >=80 && percentageScore <= 89) {
        grade = 'B'
    } else if (percentageScore >=70 && percentageScore <= 79) {
        grade = 'C'
    } else if (percentageScore >=60 && percentageScore <= 69) {
        grade = 'D'
    } else if (percentageScore >=0 && percentageScore <= 59) {
        grade = 'F'
    }

    return `You got a ${grade} (${percentageScore}%)!`
}

console.log(checkResults(23,20))