// Inheritance allows a class to inherit properties and methods from another class using "extends".


    class Animal{
        speak(){
            return "Animal speaks";
        }
    }

    class Dog extends Animal{
        speak(){
            return "Dog barks";
        }
    }

    const d = new Dog();
    console.log(d.speak());                 //Dog barks

    // ** Dog inherits speak() from Animal and overrides it.