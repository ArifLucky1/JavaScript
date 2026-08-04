// Class are a syntactical sugar over constructor function (ES6 feature).


    class Car{
        constructor(brand){
            this.brand = brand;
        }

        start(){
            return this.brand + ' started';
        }
    }

    const c = new Car("BMW");
    console.log(c.start());             //BMW started