// Destructuring is a syntax that allows unpacking values from arrays or properties from objects.


    // Array

    const [a, b, ...rest] = [1,2,3,4];          //a=1, b=2, rest=[3,4]


    // Object

    const {name, age, ...info} = {
        name: "Arif",
        age: 25,
        city: "Delhi",
        role: "dev"
    };                                         // name = "Arif", age = 25, info = {city: "Delhi", role: "dev"}





// Destructuring

    // Destructuring allows unpacking values from arrays or properties from objects into variables.


    // Array Destructuring                              // Object Destructuring
        const arr = [1,2,3];                                const user = {name: "Arif", age: 25};
        const [a, b, c] = arr;                              const {name, age} = user;
        // a = 1, b = 2, c = 3                               // name = "Arif", age = 25


//  ***  You can rename variables and set default values.  ***


    const {name: n, city = "Delhi"} = {name = "Arif"};
    // n = "Arif", city = "Delhi"