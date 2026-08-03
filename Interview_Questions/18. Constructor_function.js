// A constructor function is used with "new" keyword to create objects.


    function Car(brand){
        this.brand = brand;
        this.start = function(){
            return this.brand + " started";
        }
    }

    const c = new Car("Tesla");
    console.log(c.start());             //Tesla started