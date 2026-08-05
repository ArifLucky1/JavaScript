// slice() returns a shallow copy of a portion of an array.

    // Syntax: arr.slice(start, end)    // end is not included.


    const arr = [1, 2, 3, 4, 5];

    const One = arr.slice(1, 4);                // [2, 3, 4]
    const Two = arr.slice(2);                   // [3, 4, 5]
    const Three = arr.slice();                    // [1, 2, 3, 4, 5]

    console.log(One);
    