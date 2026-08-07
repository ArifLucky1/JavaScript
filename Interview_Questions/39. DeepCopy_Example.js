//      DeepCopy Example

    // using structuredClone (modern browsers) or JSON.

    const original = {
        name: "Arif",
        hobbies: ["coding, travelling"],
        address: {city: "Delhi"}
    };

    const copy1 = structuredClone(original);                     // Deep copy

    const copy2 = JSON.parse(JSON.stringify(original));         // Deep copy (works for JSON-safe data only)