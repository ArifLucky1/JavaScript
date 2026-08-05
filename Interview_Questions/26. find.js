// find() returns the first element that satisfies the condition.


    const users = [
        {
            id: 1,
            name: "A"
        },
        {
            id: 2,
            name: "B"
        },
        {
            id: 3,
            name: "C"
        },
    ];

    const user = users.find(u => u.id === 2);

    console.log(user);                          // { id: 2, name: 'B' }
    

    // ** Returns undefined if not found. **