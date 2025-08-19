// types of data
// 1. Primitive datatype (pass by value)
/*
7 types of primitive datatype
STRING
BOOLEAN
NUMBER
BIGINT
NULL
UNDEFINED
SYMBOL(used to make any value unique)
*/
//  2. Non-primitive/ Reference datatype (pass by reference)
/*
3 type of reference datatype
ARRAY
OBJECTS
FUNCITONS
*/

// Symbol
const id = Symbol("1234")
const anotherId = Symbol("1234")


console.log(id === anotherId)

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/