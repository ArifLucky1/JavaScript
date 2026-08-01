// A callback is a function passed as an argument to another function and executed later.


    function greet(name, cb){
        console.log("hello " + name);
        cb();
    }

    greet("Arif", function(){
        console.log("Callback executed");
    });




    // ** Used in async operations like setTimeout, events, API calls etc.