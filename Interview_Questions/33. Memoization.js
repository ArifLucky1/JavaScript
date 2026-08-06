 /* Memoization is an optimization technique that caches the 
    result of expensive function call and returns the cached result 
    when the same inputs occur again. */


    function memoize(fn){
        const cache = {};
        return function(n){
            if(cache[n])
                return cache[n];
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }

    const square = memoize(n => n * n);
    square(5);                              // calculated
    square(5);                              // from cache



    /*
        Great for recursive or heavy calculations.    
    */