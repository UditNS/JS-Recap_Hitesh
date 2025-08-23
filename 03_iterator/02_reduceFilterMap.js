// CAN WE STORE THE VALUES OF of array element into variabe while we iterate over the array using forEach loop

let arr = ["hell", "what", "is ", "this"]
const v = arr.forEach((item) => {
    console.log(item)
    return item
})

console.log(v) // gives undefined
// conclusion :- forEach loop doesn't return anything 

// To get return value we generally use filter
let arr1 = [1,2,3,4,5,6,7,8]
const ans = arr1.filter((val) => {
    return val > 3
})

console.log(ans) // [ 4, 5, 6, 7, 8 ] return array

// If i want to do the same without using filter but with forEach
// I will create an empty array and push each number>3 into the empty array

let arr2 = []
arr1.forEach((val) => {
    if(val>3) arr2.push(val);
})

console.log(arr2)




// .map(callBackFN)
const myFun = [1,2,3,4,5,6]

const newF = myFun.map((val) => {
    return val = val + 2
})

console.log(newF)

// Chaining in map
const returnVal = myFun
    .map((num) => num*2)
    .map((num2) => num2/2)// the num will be passed as num2 in the second map
    // num2 ke value jo bhi upar method lagi hai usse jo value paas hoke aai hai vo hogi

console.log(returnVal)

// we can also apply filter onto this
const returnV = myFun.map((num) => num*2)
    .filter((num2) => num2>6)

console.log(returnV)



// .reduce()  // used in shopping cart and also used in react
// accumulator -> empty variable
// pheli baar accumulator initalValue se initalize hoga uska baad result accumulator ke andar chala jata hai

const nms = [1,2,4,5,6,7,8,9]

const initialValue = 0;
const myTotal = nms.reduce((acc, curr) => {
    return acc + curr
}, initialValue)

console.log(myTotal) //accumulator return ho raha

// Shopping kart example
const shoppingCart = [
    {
        item : "js course",
        price : "7999"
    },
    {
        item : "ML course",
        price : "9999"
    },
    {
        item : "goLang",
        price : "3999"
    }
]

const cartValue = shoppingCart.reduce((acc, curr) => acc + Number(curr.price), 0)

console.log(cartValue)