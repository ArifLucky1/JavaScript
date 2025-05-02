// let string = "Arif"     //String works with both single '' And double "" inverted commas.
// let string = 'Arif'

const name = "Arif"
const repoCount = 50

// console.log(name +  " repoCount" + " Value");       // This is old ways to concatinate strings. Avoid, this is not recommended.

// Use backticks ``

// console.log(`Hello My name is ${name} and my repo Count is ${repoCount}`);

// another way to declared string:

const gameName = new String('Mohd-Arif')        //Do gameName in Browser console.. That is not Array. string is a object key value pairs type.
// console.log(gameName);
// console.log(gameName[0]);       M
// console.log(gameName[1]);       o
// console.log(gameName[2]);       h
// console.log(gameName[3]);       d
// console.log(gameName[4]);       -
// console.log(gameName[5]);       A

console.log(gameName.__proto__);        //all prototype

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(2, 3)
console.log(anotherString);
