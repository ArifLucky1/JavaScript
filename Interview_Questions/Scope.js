// Scope determines the accessiblity of variables.

// Global scope -> available everywhere.Global.
// Function scope -> inside function.
// Block scope -> inside {} (let,const)

    let x = 10;                     // global scope
    function test(){
        let y = 20;                 // function scope
        if(true){
            let z = 30;             // block scope
        }
    }

    console.log(x);