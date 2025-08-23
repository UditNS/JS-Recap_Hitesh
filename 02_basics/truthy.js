// Truthy values
// "0",  "false",  " ",  [],  {},  function(){}.  // anything inside a string is considered as truthy value

//Falsy value
// false,  0,  -0,  BigInt 0n,  "",  null,  undefined,  NaN 

// All are true values
// false == 0
// false == ''
// 0 == ''

// Empty array check
const arr = []

if(arr.length == 0){
    console.log("empty array")
}

// Empty object check
const obj = {};

if(Object.keys(obj).length == 0){
    console.log("empty object")
}

// Nullish coalescing operator (??): null undefined (safety check)
let val1;
//val1 = 5 ?? 10
// Sometimes what happens when we call from db we don't get the response instantly, you will get two values so in that situation this operator is being used

val1 = null ?? 12
val1 = undefined ?? 13;
val1 = null ?? 12 ?? 23 // jo bhi pheli value mile gye vo value assign ho jaye gyi

console.log(val1)


// Ternary operator
// condition ? true : false
const carPrice = 874044;
carPrice > 1232420 ? console.log("you can buy") : console.log("you can't buy it right now")