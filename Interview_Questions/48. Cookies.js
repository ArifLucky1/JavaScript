// Cookies are small pieces of data stored in the browser and sent with every request to the server.


//  Set ( expires in 7 days)
    document.cookie = 'user=Arif; expires=' + new Date(Date.now() + 7*24*60*60*1000).toUTCString();


// Get
   let c = document.cookie;

// Delete
   document.cookie = 'user=; expires=Thu, 01 Jan 2000 00:00:00 UTC,'; 



//  ***  Cookies are sent in HTTP headers, used for authentication, sessions, preferences etc.   ***