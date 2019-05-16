// Global and Local Scope

// Global (name)
    // Local (name)
        // Local
    // Local

let name = 'Rony'

if (true) {
    let name = 'Mike' // this variable "name" is not refering to the global variable - this is called variable shadowing

    if (true) {
        console.log(name) // this is refering to the local var 'Mike'
    }
}

if (true) {
    console.log(name) // this is refering to the global variable
}
// Second Scenario
// Global 
    // Local 
        // Local
    // Local

    

    if (true) {
        
        if (true) {
            name = 'Jen' // This is a "Leaked Global" - no variable was explicitly defined using 'let' - so javascript defines it automatically as a global variable which will be available to all functions. To avoid leaked Global, declare the variable locally usine 'let'
            console.log(name) 
        }
    }
    
    if (true) {
        console.log(name) // 'Jen' is assigned to it
    }