
    // Generators are special functions that can pause and resume using 'yield'. They return an iterator.


        function * count(){
            yield 1;
            yield 2;
            yield 3;
        }
        const gen = count();

        console.log(gen.next());                    // {value: 1, done: false}
        console.log(gen.next());                    // {value: 2, done: false}
        console.log(gen.next());                    // {value: 3, done: false}
        console.log(gen.next());                    // {value: undefined, done: true}


        ***  Helpful for lazy evaluation, infinite sequences, etc.   ***