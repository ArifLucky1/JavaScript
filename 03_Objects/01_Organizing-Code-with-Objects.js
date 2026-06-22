/* Lesson overview
    This section contains a general overview of topics that you will learn in this lesson.

    Using objects to organize data.
    Using objects to organize functionality.
    Object methods and the this keyword.
*/

// There are multiple ways to define objects in JavaScript, but in many cases object literal syntax is used as follows:

const myObject = {
  property: "Value!",
  otherproperty: 77,
  "obnoxious property": function () {
    // do stuff!
  },
};
console.log(myObject);

// There are also 2 ways to get information out of an object:

// dot notation
console.log(myObject.otherproperty);

// bracket notation.
console.log(myObject["obnoxious property"]);

/* Which method you use will depend on context. Dot notation is cleaner and is usually preferred, 
    but there are plenty of circumstances when it is not possible to use it.
    For example, myObject."obnoxious property" won’t work because that property is a string with a 
    space in it. Likewise, you cannot use variables in dot notation: 
*/

const variable = "property";

console.log(myObject.variable)
// "undefined" because it's looking for a property named "variable" in our object

console.log(myObject[variable]);
// this is equivalent to myObject["property"] and return "Value!"