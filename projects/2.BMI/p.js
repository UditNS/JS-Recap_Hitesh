// e.preventDefault() is a JavaScript method used within an event handler to stop the default action associated with that event from occurring.

// const height = document.querySelector('#height')
// const weight = document.querySelector('#weight')
// const result = document.querySelector('#results')
// const btn = document.querySelector('button')

// let h = height.addEventListener('input', (e)=>{
//   return Number(e.target.value) 
// })

// let w = weight.addEventListener('input', (e)=>{
//   return Number(e.target.value) 
// })
// console.log(w)


// btn.addEventListener('click', () => {
//   result.innerHTML = `${h/w}`
// })




// through tutorial
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height == '' || height<0 || isNaN(height)){
    result.innerHTML = "please enter a valid height ", height
  }
  else if(weight == '' || weight<0 || isNaN(weight)){
    result.innerHTML = "please enter a valid weight ", height
  }
  else{
    let ans = (weight / ((height*height) /10000)).toFixed(2)

  result.innerHTML = `<span>${ans}</span>`
  }

  

})