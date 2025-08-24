// setTimeout() -> it will execute only once after particular time
// clearTimeout() -> we need to pass the reference of setTimeout to this.
// setInterval() -> it will execute it again and again after an interval
// clearInterval()

//handler -> function without a name or reference of the function

let stimeout;

document.querySelector('#start').addEventListener('click', () => {
    stimeout = setTimeout(function(){
        console.log("udit")
    },2000)
    console.log('started')
})



// usually we add clearTimeout in an event

document.querySelector('#stop').addEventListener('click', () => {
    clearTimeout(stimeout)
    console.log('stopped')
})

//similarly for setInterval and clearInterval