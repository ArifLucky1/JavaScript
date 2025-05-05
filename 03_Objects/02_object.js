// const tinderUser = new Object()          this is a singleton object
//  const tinderUser = {}                  // this is a non-singleton object

//console.log(tinderUser);        //empty object {} in both case..


const tinderUser = {}
tinderUser.id = "1256sas"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Arif@google.com",
    fullname: {
        userfullname: {
            firstname: "Mohd",
            lastname: "Arif"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}                         // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2)        // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }   optional parameter dena chiye taki jitni bhi value h sab combine ho jyegi or guarented result yhi aayega..

// const obj3 = {...obj1, ...obj2}     spread Operetor

// console.log(obj3);


const users = [
    {},
    {},
    {},
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));       // [ 'id', 'name', 'isLoggedIn' ] in the form of Array..like keys we can access all values too..
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));           //boolean value..  TRUE        // like includes..
