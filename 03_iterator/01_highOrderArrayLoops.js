// for-of loop
// here object doesn't mean js object it is in general objects
let arr = [1,2,3,45,5]
for (const element of arr) {
    console.log(element)
}

//Maps (It is an object which holds key value pair. Also remember the order of insertion of key )
const mp = new Map() // Map is known for holding unique values 
mp.set('IN', "India")
mp.set("USA", "United States of America")
mp.set("FR", "France")
mp.set('IN', "India")

console.log(mp)

// Printing map element using loop 
for (const [key, value] of mp) { //[key, value] -> destructing of map  
    console.log(key, " :- ", value)
} 

// objects isn't iterable like maps here in for of loop 
// In case of object we use for in loop
const myObj = {
    "name" : "Udit",
    "surname" : "Singh"
}
for (const key in myObj) {
    console.log(`key is ${key} and the value is ${myObj[key]}`)
}


// if we use for-in loop in array then it will return the index(key) instead of the value.
// To get the value of array element in for-in loop we use arr2[key]. The same way we extract value in object
const arr2 = ["hello", "who", "is", "this"]
for (const key in arr2) {
    console.log(key)
}

// can we apply for-in loop in map?
// Actually the map is non iterable

// forEach loop(widely used) // Best explained by hitesh at 25:00
const arr3 = ["js", "cpp", "javascript", "tmkoc"]
//forEach takes a callback function -> we don't give name to callback fn
// Type 1
arr3.forEach(function (val){
    console.log(val)
})
// Type 2
arr3.forEach((val)=>{
    console.log(val)
})
// Type 3
function print(val){
    console.log(val)
}

arr3.forEach(print) //Yaha function ka sirf reference dena hai usko execute nahi karna iske liye print bas likha na ki print()

// print -> Reference
// print() -> execution

arr3.forEach((val, index, arr)=>{
    console.log(val, index, arr)
}) //for each loop has three parameters 1. value 2, index 3. the array

// array of objects
const arr4 = [
    {
        language: "cpp",
        year : 2002
    },
    {
        language: "js",
        year : 2032
    },
    {
        language: "java",
        year : 2022
    },
    {
        language: "kotlin",
        year : 2232
    }
]

arr4.forEach((obj) => {
    console.log(obj.language)
})