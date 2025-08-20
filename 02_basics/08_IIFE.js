// Immdiately invoked function expression
//for iife we must need to use two ()(). One in which we write the function and the other one is used for execution
//


(function() {
    console.log("Hello")
})();
((name) => {
    console.log(`${name},  what the hell`)
})('hitesh')

//In case of argument we pass in the second parenthesis

// the iife function works fine but they need to be end with the help of ; at the end of functions
// semicolan is generally required when we use two iffe or more statments