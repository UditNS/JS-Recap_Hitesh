// NUmbers
const score = 400
console.log(score)

const numb = new Number(233)
console.log(numb)  // o/p -> [Number: 233]

// methods in numbers
console.log(numb.toString())
// once a number is converted into string we can use string methods to a number
console.log(numb.toString().length)

console.log(numb.toFixed(2)); //decimal points 

const num = 12.84
console.log(num.toPrecision(3)) // return string datatype along with this only 3 digits are return.

// if the num is 1213 the o/p is 1.21e+3 precision is set to 3
// if the num is 12.84 the o/p is 12.8 precision is set to 3
// if the num is 123 the o/p is 123 precision is set to 3
// if the num is 12.84 the o/p is 12.840 if the precision is set to 5

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'))
//o/p is 10,000,000 (which is according to us standard by defaults).
// o/p is 1,00,00,000 which is according to indian standard and we need to set it using the keyword 'en-IN'


// Math
console.log(Math) //object
console.log(Math.abs(-4))
console.log(Math.round(4.53))
console.log(Math.ceil(5.1)) //top value ceil->top
console.log(Math.floor(5.9)) // bottom value floor->bottom
console.log(Math.min(4,5,67,74))
console.log(Math.max(4,5,67,74))
console.log(Math.random()) //return random value between 0 to 1

// what if i want a random value between any min and max
// then there is a formula
const min = 1;
const max = 6;
const ans = Math.floor(Math.random() * (max-min+1)) + min
console.log(ans)