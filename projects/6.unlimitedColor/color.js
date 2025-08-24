// generate random color

const randomClr = function(){
  const clr = "0123456789ABCDEF"
  let color = "#"
  for(let i=0; i<6; i++){
    const index = Math.floor(Math.random() * (15-0+1))
    color += clr[index]
  }
  document.querySelector('body').style.backgroundColor = color
}

let ref;

const startChange = function() {
    // If i just click on start again and again then event trigger again makes the code buggy
    if(!ref){
        ref = setInterval(randomClr, 1000)
    }
}

const stopChange = function(){
  clearInterval(ref)
  ref = null; //better practice
}

document.querySelector('#start').addEventListener('click', startChange)

document.querySelector('#stop').addEventListener('click', stopChange)