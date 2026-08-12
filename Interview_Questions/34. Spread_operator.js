// Spread operator (...) expands an iterable (array, String, object) into individual element.


    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];           // [1, 2, 3, 4, 5]

    const obj1 = {a: 1, b: 2};
    const obj2 = {...obj1, c:3}             // {a:1, b:2, c:3}

    console.log(...arr1);                   // 1 2 3



// Spread Operators (...) ?

    // Spread Operator expands an iterable (Array, String, Object) into individual elements.

    // Array
        const a = [1, 2];
        const b = [...a, 3, 4];
        // [1, 2, 3, 4]


    //Object
        const obj1 = {a:1};
        const obj2 = {b:2};
        const obj = {...obj1, ...obj2};
        //{a:1, b:2}


    // function Arguments
        function sum(a,b,c){
            return a+b+c;
        }
        const arr = [1,2,3];
        sum(...arr);
        // 6


//  *** Opposite of spread is Rest Operator  ***