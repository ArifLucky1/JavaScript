//           Optional Chaining   (?.)

    // Optional chaining allows safe access to nested propeties without checking each level.


        const user = {
            name: "Arif",
            address: {city: "Delhi"}
        };

        console.log(user.address?.city);        // Delhi
        console.log(user.contact?.mobile);      // undefined (no error)
        
        
