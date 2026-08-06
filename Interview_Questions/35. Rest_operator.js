// Rest operator (...) collects multiple elements into a single array or object.


    function sum(...nums){
        return
        nums.reduce((acc, n) => acc + n, 0);
    }

    console.log(sum(1,2,3,4));                      // 10

    const {a, ...others} = {a:1, b:2, c:3};

    console.log(others);
    
    