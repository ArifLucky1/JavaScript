
// var c = 300
// let a = 300

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("INNER: ", a );
    
// }
// console.log(a);
// console.log(b);
// console.log(c);                               // var scope k bhar se bhi console ho jata h islye var Use nii karte.. 

// NEsted Scope

// function one(){
//     const username = "Arif"

//     function two(){
//         const website = "Arifdotcom"
//         console.log(username);
        
//     }
//     //console.log(website);                       // Ice-Cream lene jaisa h..chote bade se ice-cream le skte h but bade chote se nii le skte..
//                                                   // Isi ko kafi hadd tak closure bhi kaha jata h..ANder ka function h, bahar k variable ko access kr skta h..Par uske peeche or kahani h
//                                                   // Nested function jab hote h child functionjo h wo parent variable ko access kr pate h.. 
//     two()
    
// }

// one()


// if (true){
//     const username = "Arif"
//      if (username === "Arif"){
//         const website = " Arifdotcom"
//         console.log(username + website);
//      }
    //  console.log(website);
     
// }
// console.log(username);


// **************** Intresting *****************

console.log(addone(5));

function addone(num){
    return num + 1
}

// addTwo(5)                            //hoisting
const addTwo = function(num){
    return num + 2
}
