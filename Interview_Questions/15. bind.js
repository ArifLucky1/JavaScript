// bind() returns a new function with "this" set to the provided value.


    const obj = {
        name: "Arif"
    };

    function sayHi(){
        console.log("Hi " + this.name);
    }

    const bound = sayHi.bind(obj);
    bound();                               // Hi Arif
