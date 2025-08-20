// this keyword -> current context of object
// We can't use this keyword in function. It only works in object
//Arrow function

console.log(this)   //in node empty object but in browser window object
const hello = () => {
    console.log("hello")
}

// implicit return
const addTwo = (num1, num2) => (num1 + num2)   // Here I don't need to write return it automatically returns
console.log(addTwo(3,6))


// heavily used in react
// curly braces use kiya then return likhna pade ga but parenthesis use kiya then return use karne ke zarurat nahi hai