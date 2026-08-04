// reduce() reduces the array to a single value by accumulating results.


    const nums = [1, 2, 3, 4]

    const sum = nums.reduce((acc,cur) => acc + cur, 0);

    console.log(sum);
    

// ** arr.reduce(callback(acc,cur,index,arr), initialValue)