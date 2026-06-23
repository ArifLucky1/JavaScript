// Object constructors

// Manually typing out the contents of all of our objects with object literals is not always
// feasible. When you have a specific type of object that you need to make multiple of,
// a better way to create them is using an object constructor, which is really just a function:

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
// console.log(Player);

const player = new Player("Arif", "X");

// console.log(player.marker);
// console.log(player.name);

/*This is not the same as calling Player("steve", "X") (without the new keyword). 
When we call a function with new, it creates a new object, makes this inside the function 
refer to that object, and makes that object inherit from the function’s .prototype property*/


function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    // console.log(this.name, this.marker);

  };
}

const player1 = new Player("Arif", "X");
const player2 = new Player("Arif2", "O");
// player1.sayName(); // logs "Arif"
// player2.sayName(); // logs "Arif2"



// ***************** EXERCISE *********************

/* Write a constructor for making “Book” objects. 
Your book objects should have the book’s title, author, the number of pages, 
and whether or not you have read the book.
Put a function info() into the constructor that can report the book info.*/
