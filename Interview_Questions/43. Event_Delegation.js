// Event delegation is a technique where a single event listener is added to a parent element to handle events for its child elements.


    // Use Case: Useful for dynamically added elements.


    document.getElementById('parent').addEventListener('click', function(e){
        if(e.target && e.target.matches('li')){
            console.log('li clicked:', e.target.innerText);
            
        }
    })


//     Parent (ul)     -------->           ul#parent 
//    (listener here)                  li1 li2 li3 li4

//    *** Only 1 listener but works for all <li>   ***