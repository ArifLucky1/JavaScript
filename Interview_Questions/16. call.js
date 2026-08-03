// call() invokes the function immediately with "this" set to the provided value. 
//  Arguments are passed seperately.


    function add(a, b){
        console.log(this.x + a+b);
    }

    add.call({x:10}, 5, 3)          // 18