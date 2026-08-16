
//  null vs undefined ?

//      null is an intentional absent of any object value.

//      undefined means a variable is declared but not assigned.      


        let a;
        console.log(a);                 // undefined
        
        let b = null;
        console.log(b);                 // null

        console.log(typeof a);          // undefined
        console.log(typeof b);          // object (historical bug)
        
        
//        ***  Use null when you want to clear or empty a value.    ***