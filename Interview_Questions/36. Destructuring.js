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