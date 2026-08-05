// splice() changes the original array by adding, removing and replacing elements.

    // syntax: arr.splice(start, deleteCount, item1, item2,...)


    const arr = [1, 2, 3, 4, 5];

    arr.splice(1, 2, 'a', 'b')          // Removes 2 elements from index 1 and add 'a','b'.

    console.log(arr);                  // [ 1, 'a', 'b', 4, 5 ]
    