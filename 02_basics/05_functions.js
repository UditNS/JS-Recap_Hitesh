function sayMyName(){
    console.log('U')
    console.log('D')
    console.log('I')
    console.log('T')
}

sayMyName()

// arguments -> when function called then we pass arguments
// parameters -> when we create function then we called it parameter

function addTwoNumber (num1, num2){
    return num1 + num2
}

const result = addTwoNumber(23, 43);
console.log(result)

//what if we pass more than 2 parameters like addTwoNumber(23, 43, 23, 45)

function calculateCartPrice(num1){
    return num1  // return only the first item
}

console.log(calculateCartPrice(23,45,67))

// to resolve this there is an operator -> rest operator(same as spread operator). Working is same just name varies as per the use case
function calculateCartPrice2(val1, ...num1 ){ // rest operator{...}
    return num1  // return array of arguments
    // with loop i can easily add them
}
console.log(calculateCartPrice2(23,45,67))
// val1 contain 23 and rest go to num1

// We can pass object and arrays in function as arguments