const user = {
    username: "Arif",
    price: 1999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);