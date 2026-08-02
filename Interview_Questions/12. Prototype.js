// Prototype is an object from which other objects inherit properties and methods.
// Every object has an internal link to its prototype.


    function Person(name){
        this.name = name;
    } 

    Person.prototype.greet = function(){
        return "Hi " + this.name;
    };

    const p1 = new Person ("Arif");
    console.log(p1.greet());