//  sessionStorage stores data for a single tab session.
//  Data is cleared when the tab is closed.

    // Set
    sessionStorage.setItem('token','abc123');
    
    
    // Get
    let t = sessionStorage.getItem('token');
    
    
    // Remove
    sessionStorage.removeItem('token');
    
    
    // Clear all
    sessionStorage.clear();


//      *** Similar to LocalStorage but tab specific. ***