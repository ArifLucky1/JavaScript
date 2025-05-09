// Imediately Invoked Function Expression (IIFE) jo function imediatly execute ho jye..
// IIFE.. global scope ke pollution se problem hoti h kayi baar to us global scope ke variable h jo bhi wahan decleration h uske pollution ko hatane k lye IIFE ka use kiya..


// function chai() {
//     console.log("DB CONNECTED");
    
// }
// chai()

(function chai() {
    console.log("DB CONNECTED");
    
})
()

// ()()    first parenthesis jahan pr function ki definition likhne wale h.. Second wala execution call ke lye..
// IIFE envoke to ho jata h..but use pta nii rukna kaha h..isko end krna bhi zruri h..isko end krne k lye ek ; ka use krte h..

(function chai aurcode() {
    console.log("DB CONNECTED");
    
})
()