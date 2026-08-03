// apply() is similar to call() but takes arguments as an array.

    function add(a, b){
        console.log(this.x + a+b);
    }

    add.apply({x:10}, [5, 3]);      // 18