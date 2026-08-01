// promise is an object representing the eventual completion (or failure) of an async operation.

// * States : Pending, Fulfilled, Rejected.
// * Methods : then(), catch(), finally(). 


    let promise = new Promise((resolve, reject) => {
        let success = true;
        if(success) resolve("Done");
        else reject("Error");
    });
    
    promise.then(res => console.log(res))
        .catch(err => console.log(err));