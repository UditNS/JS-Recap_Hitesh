//Creating a div h1 element
const div = document.createElement('h1')
div.className = 'main'
div.id = (Math.random()*10).toPrecision(1)
div.setAttribute('title', 'thisIsTitle') // set Attribute like the class, id style
div.style.backgroundColor = 'red'
// div.innerHTML = "hello"         //overrides the value so instead of
const addText  = document.createTextNode("this is a better version of innerText")
div.appendChild(addText)
console.log(div)

// adding the div to the body
document.body.appendChild(div)