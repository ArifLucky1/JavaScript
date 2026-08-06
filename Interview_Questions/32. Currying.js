/*  Currying is a process of converting a function with multiple arguments into a 
    sequence of functions each taking a single argument. */


    function add(a){
        return function(b){
            return function(c){
                return a + b + c;
            }
        }
    }

    console.log(add(1)(2)(3));              // 6



    /* 
    
    add(1) => fn(b)
    add(1)(2) => fn(c)
    add(1)(2)(3) => 6

    */