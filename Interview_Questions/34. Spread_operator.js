// Spread operator (...) expands an iterable (array, String, object) into individual element.


    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];           // [1, 2, 3, 4, 5]

    const obj1 = {a: 1, b: 2};
    const obj2 = {...obj1, c:3}             // {a:1, b:2, c:3}

    console.log(...arr1);                   // 1 2 3
    