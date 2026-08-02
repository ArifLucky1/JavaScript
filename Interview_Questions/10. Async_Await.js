// Async/Await is a syntax over Promises to write asynchronous code in a synchronous manner.

//  * async -> make function return a Promise.
//  * await -> waits for Promise to resolve.


    async function getData(){
        try{
            let res = await fetch('data.json');
            let data = await res.json();
            console.log(data);
        }
        catch(err){
            console.log(err);
        }
    }

    getData();