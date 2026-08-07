//              ShallowCopy Example

    //  Using spread/Object.assign   

    const original = {a: 1, nested: {b:2}};

    const copy = {...original};                 // or Object.assign({}, original)

    copy.a = 10;                       // independent

    copy.nested.b = 20;                // affects original (same reference)

    console.log(original.nested.b);             // 20
    