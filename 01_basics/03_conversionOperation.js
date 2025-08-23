let score = 33;
console.log(typeof score);

let valueInAlpha = String(score)
console.log(typeof valueInAlpha);

// similarly string to number -> Number

// null conversion from string to number result in 0\
let a = null
console.log(typeof a)
let b = Number(a)
console.log(b)
// undefinded conversion from string to number results in NaN

// "33" -> 33
//"33abc" -> NaN
// true -> 1
// false -> 0

// Conversion Boolean, String, Number

// Boolean conversions
//1 -> true
//0 -> false
//"" -> false
// "udit" -> true



// ******************************  Operations  ********************************
// string concaetination
let str1 = "hell"
let str2 = "o"

let str3 = str1 + str2
console.log(str3);


// second type
console.log(1+"2")
console.log("1" + 2)
console.log(1 + 2 + "2")
console.log("1" + 3 + 2)
