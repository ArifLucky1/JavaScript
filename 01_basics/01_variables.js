const accountId = 1444153
let accountEmail = "Arif@google.com"
var accountPassword = "123456"
accountCity ="Delhi"
let accountState;   // value not define output will undefined.

console.log(accountState);


// console.log(accountPassword);

// accountId = 4     not allowed

accountEmail = "Arif@microsoft.com"
accountPassword = "245215212"
accountCity = "Bangaluru"

console.log(accountPassword);
/* 
Prefer not to use var
Because of issue in block Scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])


// Var vs let vs const
//                    var                let           const
// Scope          | function scope  | Block scope | Block Scope
// Re-declare     | Yes             | No          | No
// Re-assign      | Yes             | Yes         | No
// Hoisting       | Yes (init as undefined)  | Yes (TDZ)   | Yes (TDZ)
// Use            | Old             | New Code    | Constants

// TDZ = temporal Dead Zone (can't access before declaration)