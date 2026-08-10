// Event capturing is the propagation of an event from the root (document) down to the target element.


// order:   document -> ... -> parent -> Taget


    document.querySelector('div').addEventListener('click', () => {
        console.log('div clicked');
        
    }, true);                           // true = capturing

    // *** Use third parameter true. ***