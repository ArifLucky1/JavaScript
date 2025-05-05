const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)                      // push existing array pr push krta h..

// console.log(marvel_heros);                      //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros[3][2]);                //    0         1           2            (0)    3   (1)      (2)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);                              // same results but.. Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const all_new_heros = [...marvel_heros, ...dc_heros]        // Spread Opreator... mostly used..
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)             // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array);


//console.log(Array.isArray("Arif"));             // false
//console.log(Array.from("Arif"));                // now its a Array..       Creates an array from an iterable object.

//console.log(Array.from({name:"Arif"}));         // important for interviews      //its gives Empty array..btana padega key ya value kisko array banana h..


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));          //Returns a new array from a set of elements.

