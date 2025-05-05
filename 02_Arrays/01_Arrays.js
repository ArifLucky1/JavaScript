// ***********************Arrays******************

// shallow copy :- A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)
// deep copy :- A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) 

// how initialize Array.

// const myarr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["Spiderman", "Ironman"] 
// const myarr2 = new Array(1, 2, 3, 4)
// console.log(myarr[1]);

// Array methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()
// myarr.unshift(9)                  // [9, 0, 1, 2,3, 4, 5]             // add at starting of array.. all value shifted not good for large data..computer load..time consuming
// myarr.shift()                       // [1, 2, 3, 4, 5 ]
// console.log(myarr.includes(25));            //false..     boolean value
// console.log(myarr.indexOf(25));             // -1   means nii hai..always show -1.
// console.log(myarr.indexOf(54));             // -1   means nii hai..always show -1.


// const newArr = myarr.join()             // Adds all the elements of an array into a string, separated by the specified separator string.
// // console.log(myarr);
// console.log(typeof newArr);             //string


// slice, splice

// console.log("A ", myarr);

// const myn1 = myarr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myarr);

// const myn2 = myarr.splice(1, 3)             // splice operation orignal array ko muniplate krta h
// console.log("C ", myarr);
// console.log(myn2);





