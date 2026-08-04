// some() and every()??

// some() -> returns true if at least one element satisfies the condition.

// every() -> returns true if all elements satisfy the condition.


    const nums = [2, 4, 6, 8];

   const One = nums.some(n => n > 6);
   const two = nums.every(n => n % 2 === 0);
   const Three = nums.every(n => n > 0);
   const Four = nums.some(n => n < 0);
   
   
   console.log(One);                    // true (8 > 6)
   console.log(two);                    // true (all even)
   console.log(Three);                  // true
   console.log(Four);                   // false