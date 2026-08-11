// Fetch API is a modern way to make HTTP request (return Promise)


    fetch('https://jsonplaceholder.typicode.com/post/1')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('Error:', err));
    

//    ¦---------------------------------------------------------¦
//    ¦     Options         ¦       Description                 ¦    
//    ¦---------------------¦-----------------------------------¦   
//    ¦                     ¦                                   ¦
//    ¦     method          ¦     GET, POST, PUT, DELETE, etc.  ¦
//    ¦---------------------¦-----------------------------------¦
//    ¦     headers         ¦     Set request headers           ¦  
//    ¦---------------------¦-----------------------------------¦
//    ¦     body            ¦     Data to send (for POST, PUT)  ¦
//    ¦---------------------------------------------------------¦
//
