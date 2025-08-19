// Javascript array is resizeable
// Array can contain mix of multiple data type
// Javascript array copy operation created shallow copy rather than deep copy

//Shallow Copy -> Shallow copy of an object is a copy whose properties shares the same reference point  of the source object
//Deep Copy -> Deep copy of an object is a copy whose properties does not shares the same reference point  of the source object

let myArr = [1,2, 'udit', true];
let newArr = new Array(1,2,43,576)
// Methods in Array 
myArr.push(56);
myArr.pop()
myArr.unshift(43); // puts value in the front of the array this is a heavy operation
myArr.shift(); // remove value from front
myArr.includes(43);
myArr.indexOf(2);

const nArray = myArr.join() // it binds the array into a string
console.log(nArray) 
console.log(typeof nArray) // returns a string


//Slice vs Splice (Most asked interview question)
console.log("A", myArr)

const a1 = myArr.slice(1,3); // last index not included
console.log("B", myArr)
console.log(a1)

const a2 = myArr.splice(1,3) // last index included
console.log("C", myArr)
console.log(a2)

//Slice doesn't modify the original array while the splice modify the original array and divide it on the basic of index or range