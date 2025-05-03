let myDate = new Date()
// console.log(myDate);                                    //2025-05-03T14:32:02.552Z
// console.log(myDate.toString());                         //Sat May 03 2025 14:32:02 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());                     //Sat May 03 2025
// console.log(myDate.toISOString());                      //2025-05-03T14:32:02.552Z
// console.log(myDate.toJSON());                           //2025-05-03T14:32:02.552Z
// console.log(myDate.toLocaleString());                   //5/3/2025, 2:32:02 PM
// console.log(myDate.toLocaleDateString());               //5/3/2025
// console.log(typeof myDate);                             // object

// let myCreatedDate = new Date(2023, 0, 25)               //Mon Jan 23 2025
// let myCreatedDate = new Date(2023, 0, 25, 5, 3)         //1/23/2025, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-24")              //1/24/2025, 12:00:00 AM  yy//mm//dd
// let myCreatedDate = new Date("01-14-2023")              //1/14/2023, 12:00:00 AM  mm//dd//yy  in india.
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000));               //in seconds

let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long"
})

