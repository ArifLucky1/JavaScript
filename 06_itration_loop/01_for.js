// for loop ka itrations bhi kehte h..

// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}

for (let i = 1; i <=  10; i++) {
    // console.log(`outer loop value ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + "*" + j + "=" + i*j );
        
        
    }
    
}

let myArray = ["flash", "superman", "batman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {          // 0th position se start ho rha h..islye <= nii hoga.. undefined ho jyega
    const element = myArray[index];                             // index++ hona bhut zruri h nii to flash pr hi atak jayega..
    // console.log(element);
    
}

// break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break
        
//     }
//     console.log(`value of i is ${index}`);
    
// }

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
        
    }
    console.log(`value of i is ${index}`);
    
}