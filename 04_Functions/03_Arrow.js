const user = {
    username: "Arif",
    price: 1999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Arif"
//      console.log(this.username);
    
// }
// chai()



// const chai = function() {
//     let username = "Arif"
//     console.log(this.username);
    
// }
//chai()

// const chai = () => {
//     let username = "Arif"
//     console.log(this);
    
// }
// chai()



// ************************* Arrow Function *************************************

// const addTwo = (num1, num2) => {             //Basic Arrow function
//     return num1 + num2
// }

//const addTwo = (num1, num2) =>  num1 + num2           // Implesite return mean mene maan liya return lene ki zrurat h..
const addTwo = (num1, num2) =>  (num1 + num2)           // {} curly brackets me likha to return likhna padega..parenthesis me likha to return nii likhna padega.. 
// console.log(addTwo(3, 4));
