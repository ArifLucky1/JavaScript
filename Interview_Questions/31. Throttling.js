// Throttling ensure a function is called at most once in a given time interval.

    // Use case: Scroll, resize, mouse move, API rate limit.API


    function throttle(fn, delay){
        let last = 0;
        return function(...args){
            let now = Date.now();
            if(now - last >= delay){
                last = now;
                fn.apply(this.args);
            }
        }
    }


/*.
.               call    call    skip    skip    call    skip    skip    call
.                 ↓       ↓       ↓       ↓       ↓       ↓       ↓       ↓
.                 ------------------------------------------------------------>
.                0ms             500ms              1000ms              1500ms          time
.   
.                               delay = 500ms
.
.
.
.
.
.
.
.
.
.
*/


