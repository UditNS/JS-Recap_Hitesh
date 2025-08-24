// Promise has three state
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// Promise is an object which represents the eventual completion of an asynchronous operation

// what is bluebird and q library?
// these library is used with promise which provide functionality like fetch async and all in 5-10 years ago and these library then adopted to core js so we don't need these libraries now


// Method - 1 of writing of promise with variable
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(()=> {
        console.log('Async task is completed')
        resolve() // when i run the code without this line then the .then() isn't called because resolve() and .then is connect.
        // firstly setTimout runs then the .then will run
    },1000)
});

promiseOne.then(function(){
    console.log('promise is consumed')
})

// Method - 2 of writing of promise without variable

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("async task is completed 2 ")
        resolve()
    }, 1000)
}).then(function(){
    console.log("promise 2 is consumed")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(()=> {
        resolve({userName:"udit", email:"uditn007@gmail.com"}) // whatever i pass into resolve() as parameter it can be get into  .then() as parameter of function
    },1000)
});

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({userName: 'udit', password:'1234'})
        }
        else{
            reject("something went wrong")
        }
    }, 1000)
})

// Chaining -> phele .then() ka return uske baad wale.then() me jayega
promiseFour
.then((user)=>{
    return user.userName
})
.then((username) => {
    console.log(username) // return username == 'udit'
})
.catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("finally the promise is either resolve or rejected. This will execute unless the resoolve or reject of promise. this is by default")
})

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({userName: 'udit', password:'1234'})
        }
        else{
            reject("something went wrong with JS")
        }
    }, 1000)
})

// async await can't handle error directly. So we need try catch block
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// fetch -> returns a promise
async function getAllUser(){
    try {
        const response = await fetch('https://gmail.com')
    console.log(response)
    const data = await response.json() //it also takes time because first response load then conversion
    console.log(data)
    } catch (error) {
        console.log(error)
    }  
}

getAllUser()

// now using .then() and .catch()
//in chaining jab ek .then() process ho jaye ga tab next wala .then chale ga
fetch('https://wikipedia.com')
.then(function(response){
    return response.json()
})
.then(function(res){
    console.log(res)
})
.catch(function(error){
    console.log(error)
})

// Interview Question
// Q. you requested from promise and an error code occur 404 etc. Will it get caugth in .then() or .catch()
// Ans. Actually 404 is a HTTP response, its not an error. We only get error when the browser doesn't request to the browser

// fetch uses microTask queue/ priority queue it is a fast queue that's why whenever we do a fetch and a setTimeout function then fetch get executed first even with a asycn-await

// while other operations are in task queue

// if fetch takes 1 sec and the timeout function also takes 1 sec then fetch result will be declared first