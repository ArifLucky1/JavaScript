/* A Closures is a function that remembers variables from its outer (lexical) scope
   even after the outer function has finished execution. */


   function outer(){
    let count = 0;
    return function inner(){
        count++;
        return count;
    }
   }

   const fn = outer();
   fn();
   fn();