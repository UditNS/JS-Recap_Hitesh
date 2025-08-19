// Two method for string concatination
// 1. Using plus sign ("+")
let str = str1 + str2;

// 2. Using backtick(``).   // Better way nowadays people preffer using this
let name = "Udit"
let profession = "software engineer"
console.log(`hello this is ${name} and i am a ${profession}`)

// String object
const username = new String("uditns") // here username is an object
/*
key value pair
0: u,
1: d,
2: i,
3 : t
*/

// key value pair access
console.log(username[0])
console.log(username__proto__)

// method of string
console.log(username.length)
console.log(username.toUpperCase()) 
console.log(username.indexof('t'))
console.log(username.substring(0,2))
console.log(username.slice(-4, 2))

let ap = "        dfasd     "
console.log(ap.trim()) // remove all the blank spaces 

let url = "https://udit.com"
url.replace(".com", ".in")
console.log(url)

console.log(url.includes("udit"));

url.split
// Slice can take negative values while the substring cann't take negative values