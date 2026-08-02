// Methods are functions stored as object properties.
//  They define behaviors of objects.


    const user = {
        name: "Arif",
        greet: function(){
            return "hello " + this.name;
        }
    };

    console.log(user.greet());