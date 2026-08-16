
//   == Vs === ??

//   ==  compares value after type coercion (type conversion).

//   === compares value and type without conversion.


        5 == '5'            // true (string '5' -> number 5)
        5 === '5'           // false (different types)
        0 == false          // true (0 -> false)
        0 === false         // false (number vs boolean)
        null == undefined   // true
        null === undefined  // false


//      ***   Use === unless you really need type coercion.   ***