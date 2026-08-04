// "this" refers to the object that is executing the current function.

const { StrictMode } = require("react")

// * In method      -> Object 
// * In function    -> global (or undefined in StrictMode)
// * In Arrow fn    -> lexical (inherits from parent) 
// * In constructor -> new instance



    const obj = {
        name: "Arif",
        sayHi(){
            console.log(this.name);
        }
    };

    obj.sayHi();                 // Arif

    const fn = obj.sayHi;
    fn()                        // undefined (in strict mode)


    const arrow = () =>  
    console.log(this);
    arrow();                    // window (or undefined in strict mode)