// Event bubbling is the propagation of an event from the target element up to its ancestor.


// Order:        Target -> Parent -> Grandparent -> ... -> document
//                                             
//  
//
//                              ¦--------------------------------------------¦   
//                              ¦         div (grandparent)                  ¦       
//                              ¦     ¦--------------------------------¦     ¦   
//                              ¦     ¦     div (parent)               ¦     ¦            
//                              ¦     ¦                                ¦     ¦                   
//                              ¦     ¦   ¦--------------------¦       ¦     ¦   
//    -------------------       ¦     ¦   ¦   button (target)  ¦       ¦     ¦   
//    ¦ click on button ¦ ↗     ¦     ¦   ¦--------------------¦       ¦     ¦
//    -------------------       ¦     ¦                                ¦     ¦                   
//                              ¦     ¦--------------------------------¦     ¦   
//                              ¦____________________________________________¦




//   ****     Event travels Upwards    *****



    document.querySelector('div').addEventListener('click', () => {
        console.log('div clicked');
        
    }, false);                          // false = bubbling (default)