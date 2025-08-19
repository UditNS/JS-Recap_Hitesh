// Objects can be declared using two methods
// 1. Literal
// 2. Constructor

// Singleton(when we create object using constructor then iske jaisa sirf ek yahi obj hai)

// Whenever we declare object using literal singleton is not created

// object literals(key value pair)
const obj = {
    a:"uns",
    b : "unknown",
    "email address": "uditn007@gmail.com"
}

// access object element(two methods)

obj.a
obj["email address"]
obj[a]
//can't access email address with obj."email address" or obj.email address
//only way to access email is obj["email address "]

// How to use symbol datatype as a key in object
const newS = Symbol("key1")

const obj2 = {
    newS : "key1",
    [newS]: "Actual symbol syntax"
}

//Changing value of key in object
obj.email = "uditns007@gmail.com"

// Freeze the changes in object 
Object.freeze(obj); // Now the values of obj can't be changed

//creating function inside an object
obj.greeting = function(){
    console.log("hello")
}

console.log(obj.greeting())