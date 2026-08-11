// Arrow functions provide a shorter syntax and do not have their own 'this' binding.


    // Normal function
        function add(a, b){
            return a + b;
        }

    // Arrow function
        const add = (a, b) => a + b;
        const square = x => x * x           // single param
        const sayHi = () => "Hi Arif";      // no param


    // *** "this" in arrow function comes from the enclosing scope. ***