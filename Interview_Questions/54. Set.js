// Set is a collection of unique values (no duplicates).

    const set = new Set();
    set.add(1);
    set.add(2);
    set.add(2);                 // ignored
    console.log(set);           // Set {1, 2}
    console.log(set.has(1));    // true    
    
    set.delete(1);              // remove 1
    console.log(set.size);      // 1



//        *** Set Methods: ***

//      add()  
//      has()
//      delete()
//      clear()
//      size