//Filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

//  const newNums = myNums.filter( (num) => num > 4)
//  const newNums = myNums.filter( (num) => { return num > 4})            // Empty array..explicite return...return keyword use krna padega..scope use ho rha h..
 
// forEach
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);
 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, 
        edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1981, 
        edition: 2004},
    { title: 'Book Three', genre: 'History', publish: 1992, 
        edition: 2004},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1999,
        edition: 2004},
    { title: 'Book Five', genre: 'Science', publish: 1989, 
        edition: 2004},
    { title: 'Book Six', genre: 'Fiction', publish: 2009, 
        edition: 2004},
    { title: 'Book Seven', genre: 'History', publish: 1987, 
        edition: 2004},
    { title: 'Book Eight', genre: 'Science', publish: 1986, 
        edition: 2004},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, 
        edition: 2004},
];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

const userBooks = books.filter((bk) => { 
    return bk.publish >= 1987 && bk.genre === 'History'})
console.log(userBooks);