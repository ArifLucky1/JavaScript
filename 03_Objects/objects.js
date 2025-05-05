// singleton        literals ki trah declare krte h to singleton nii banta hai..Constractor ki trah declare krte h tb sngleton banta h..
// object.create       isi ko contstructor k through kehte h isme single banta h..

// object literals

const mySym = Symbol("key1")


const JsUser = {
    // keys : "value",
    name : "Arif",
    [mySym] : "mykey1",
    // full name : "Mohd Arif",
    age : 18,
    location : "Delhi",
    email : "Arif@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);      //(.dot) se bhi kr skte h but square notation hi best h..
// console.log(JsUser["email"]);       // email as a string
// console.log(JsUser.full name);      error

//console.log(typeof(JsUser["mySym"]));     //string h symbol nii.. Interview me puchta h symbol ko object me use kro.. isko krne k lye mySym ko squre bracket me likho..

// JsUser.email = "Arif@microsoft"
// Object.freeze(JsUser)           //changes nii hone deta..freeze krdeta h..
// JsUser.email = "Arif@facebook"
// console.log(JsUser);

// console.log(typeof (mySym));

// *************Function*****************

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

