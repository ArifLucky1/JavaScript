const score = 400
//console.log(score);

const balance = new Number(152100)
//console.log(balance);               //special tells us that is a Number.

//console.log(balance.toString());        //now this is converted to string.
//console.log(balance.toString().length);        //using string properties.
//console.log(balance.toFixed(2));        //using string properties. ecommerce me use krte h decimal k baad zero


const otherNumber = 123.58652
//console.log(otherNumber.toPrecision(3));            //round off kr deta h but decimal se pehle ka number.

const hunderds = 1000000
//console.log(hunderds.toLocaleString());               // comma seperated digits in US standard code.
//console.log(hunderds.toLocaleString('en-in'));        // forn indian Standard


// ************** Maths *******************

// console.log(math);

// console.log(Math.abs(-20));              //abs means absolute value just sign change krta h value ni badal jayegi.. output will be (20)
// console.log(Math.abs(20));               // negative sign hi change hoga positive positive hi rhega..


// console.log(Math.round(4.6));                   //round off value
// console.log(Math.ceil(4.1));                    //zra si bhi value up hui to top value le lega..
// console.log(Math.floor(4.9));                   //As name sugguest floor down value le lega..
// console.log(Math.min(5, 4, 6, 9, 2, 5, 1));     //min value get in array.
// console.log(Math.max(5, 4, 6, 9, 2, 5, 1));     //max value get in array.

// console.log(Math.random());                         //always values lies between 0-1 mostly decimal
// console.log(Math.random()*10 +1);                      //Avoid Zero value add +1
// console.log(Math.random()*10) +1;             //Avoid BODMAS rule wrap all and last add +1..

// console.log(Math.floor(Math.random()*10) +1);       // floor value, not after decimal..

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)  + min))