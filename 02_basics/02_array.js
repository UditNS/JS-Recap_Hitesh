// Merging two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Method - 1: push()
// array1.push(array2); // it pushes array 2 into array1 so [num, num, num, array] total 4 elements 
console.log(array1)

// Method - 2: concat()
let newA = array1.concat(array2) // merges two array into a new array
console.log(newA)

// Method - 3: spread operator(...)
const nArray = [...array1, ...array2] // spread the array into individual elements then add them into a new array 
console.log(nArray)

//Multiple level of array in an array
const anotherArray = [1,2,3,[4,56,8], [6,[7,8,9]]]

const realArray = anotherArray.flat(Infinity); // .flat() merges the depth of array into a new array and in parameter we can provide the depth upto which the array need to be merged
console.log(realArray);

// Create array from word
console.log(Array.from("udftsafd")); //['u', 'd', 'f','t', 's', 'a','f', 'd']


//convert elements into an array
let score1 = 12
let score2 = 345
console.log(Array.of(score1, score1, score2))