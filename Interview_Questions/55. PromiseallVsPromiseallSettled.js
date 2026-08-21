
//   Promise.all     Vs      Promise.allSettled ?

// Both run multiple promises in parallel but behave differently.


//     Feature                      Promise.all                              Promise.allSettled

//     Resolves with                Array of resolved values                 Array of all results(status + value/reason)
//     Reject if                    Any promise rejects                      Never rejects
//     use Case                     When all promise must succeed.           When you want results of all, success of fail   



        // Promise.all
            promise.all([p1,p2])
            .then(res => console.log(res))
            .catch(err => console.log(err))


        
        //  Promise.allSettled
                Promise.allSettled([p1,p2])
                .then(res => console.log(res));
                
                // res = [{status: 'fullfilled', value:...},
                //        {status: 'rejected', reason:...}]