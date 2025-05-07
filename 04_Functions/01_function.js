
// function sayMyName(){
    // console.log("A");
    // console.log("R");
    // console.log("I");
    // console.log("F");
    
// }
// sayMyName()

// function addTwoNumbers(num1, num2){             // jb function ki definition banate h jo bhi input lete h.. tb Parameters kehte h..
//     console.log(num1 + num2);
    
// }

// addTwoNumbers(3, 4)                             // jb function ko call krte h tb jo value pass krte h.. wo kehlata h Arguments..


// function addTwoNumbers(num1, num2){
//     // let result = num1 + num2
//     // return result
//     return num1 + num2          //another way
//     // console.log("Arif");                     // return ek baar kr diya uske baad koi kaam ni krta function 
    
// }
// const result = addTwoNumbers(3, 5)
// console.log("result: ", result);


// function loginUserMessage (username = "you") {          // "you" is a default value.. ab if ki zrurt nii h.. or agr value aati h to overwrite ho jyegi..
//     if (username === undefined){                    // isko aise bhi likhte h industry me..(!username)
//         // console.log("Please Enter a Username");
//         return
//     }
//     return `${username} Just logged in`
// }
//loginUserMessage("Arif")            // doesn't work.. because function just return value not print..

//console.log(loginUserMessage("Arif"));
//console.log(loginUserMessage(""));      // empty string ...just logged in
//console.log(loginUserMessage("Arif"));           // null nii ayega...undefine just logged in..   INTERVIEW


// function watchingMovies(Movies = "Horror"){
//     return `you are Watching ${Movies}`
// }

// watchingMovies()
// console.log(watchingMovies("Movies") );



// function calculateCartPrice(val1, val2, ...num1){          // interview:- val1, val2 kya hoga.. 200, 400 respectively..
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000));


// Object

// const user = {
//     username : "Arif",
//     price : 199 
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }
// // handleObject(user)
// // Direct object bhi paass kr skte h..
// handleObject(
//     {
//         username: "sam",
//         price: 399
//     }
// )

// // Arrays

// const myNewArray = [200, 400, 100, 600]
// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));

// console.log(returnSecondValue([200, 400, 500, 1000]));

