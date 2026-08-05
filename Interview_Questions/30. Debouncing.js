/* Debouncing delays the execution of a function until after a wait time has passed 
    since the last time it was invoked.                                                  */


// Use Case: Search input, window resize, button click.



    function debounce(fn, delay){
        let timer;
        return function(...args){
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this,args), delay);
        }
    }

    const debouncedFn = debounce(() => {
        console.log("API call");
    }, 500);


    /*  

 .                  call        call        call
 .                   |           |           |
 .                   ↓           ↓           ↓
 .                   ----------------------------------------->>
 .                    <_____________________>                ⬆
 .                            500ms                          ¦    
 .                                                           ¦
 .                                                           ¦
 .                                                           ¦
 .                                                        API call

    */