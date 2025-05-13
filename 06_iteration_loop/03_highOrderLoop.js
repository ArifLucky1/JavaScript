// for-of loop

// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings ="Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}


// *********maps**********      map object hjo ki hold krta h. key value pairs..

const map = new Map()

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")          // no repaeted value.. uniqueness

// console.log(map);

for (const [key, value] of map) {            // destructuring krdeta h
// for (const key of map) {         
    // console.log(key, ':-', value);
    
}

// for-of loop for object..

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log();
//     // console.log(key, ':-', value);          //TypeError: myObject is not iterable
// }




// object iteration kaise krte h for-in use krke..

// const myObject = {
//     Js : 'javaScript',
//     Cpp : 'C++',
//     Rb : 'rubby',
//     swift : "swift by apple"

// }

// for (const key in myObject) {
// //    console.log(key);
// //    console.log(myObject[key]);
//    console.log(` ${key} shortcut is for ${myObject[key]}`);
   
// }




// for-in for Arrays

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//   //console.log(key);            //0, 1, 2, 3, 4
//     console.log(programming[key]);
    
// }



// for-each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
  
// })

//Arrow function..

// coding.forEach ((item) => {
//     console.log(item);
    
// })


// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })



// [{}, {}, {}]
const mycoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
    languageName : "java",
    languageFileName : "java"
    },
    {
    languageName : "python",
    languageFileName : "py"
    },
]

mycoding.forEach ( (item) => {
    console.log(item.languageName);
    
})