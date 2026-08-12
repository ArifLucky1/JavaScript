
//      Map is a collection of key-value pairs. Keys can be of any type.

    const map = new Map();

    map.set('name', 'Arif');
    map.set(1, 'one');
    map.set(true, 'bool');

    console.log(map.get('name'));           // Arif
    console.log(map.has(1));                // true

    map.delete(1);
    console.log(map.size);                  // 2


//          ***  Map Methods:  ***

//      set(key, value)
//      get(key)
//      has(key)
//      delete(key)
//      clear()
//      size