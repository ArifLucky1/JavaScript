// Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

//  * var -> hoisted and initialized as undefined.
//  * let/const -> hoisted but not initialized (TDZ).
//  * functions -> fully hoisted.

    console.log(a);    //undefined
    var a = 10;

    console.log(b);
    let b = 20;          //ReferenceError