// Primitive-  Call by value type h..  reference nii diya jata h original data copy kr ke diya jata h.. 
    // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

    const score = 100                                        //number
    const scoreValue = 100.3                                 //number
    const name = "Arif";                                     //string
    const isLoggedIn = false                                 //boolean
    const outsideTemp = null                                 //object
    let userEmail;                                           //undefined
    const id = Symbol('123')                                 //symbol
    const anotherId = Symbol('123')                          //symbol
    //  console.log(anotherId);
    //  console.log(id);
    //  console.log(id === anotherId);

    const bigNumber = 1254658646464565165656465865123n       //bigint
    //  console.log(typeof bigNumber);
     
     

// Non Primitive - Reference type.
    // Arrays, Objects, functions
 
    const heros = ["Spiderman","Ironman","Dr.Strange"]        //Array

    let myObj = {                                             //Object
        name : "Arif",
        age : 22
    }

    const myFunction = function(){                           //Function
        // console.log("Hello World");
    }
    myFunction();



// typeof
    console.log(typeof score);                // number
    console.log(typeof scoreValue);           // number
    console.log(typeof name);                 // string
    console.log(typeof isLoggedIn);           // boolean
    console.log(typeof outsideTemp);          // object
    console.log(typeof userEmail);            // undefined
    console.log(typeof id);                   // symbol
    console.log(typeof bigNumber);            // bigint
    console.log(typeof heros);                // object
    console.log(typeof myObj);                // object
    console.log(typeof myFunction);           // function       


// function ka datatypes function is return krta h pr isko bola jata h object-function..
// jitne bhi non-primitive type h inka jo return type h wo object hi aata h..
    