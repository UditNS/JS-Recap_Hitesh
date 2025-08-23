// Try these things on the browser
// 1. console.log(window)
// 2. console.log(document)
// 3. console.dir(document)


// window -> document -> html
// html -> head & body
// head -> title & meta

const test = document.getElementById('title') // gives innerHTML
console.log(test.textContent) // fetches innerText
console.log(test.innerText) // fetches innerText

// InnerText and textContent both gives the same content then whats the difference
// innerText :- Only shows the content which is visible on the screen
// textContent :- Shows the content which was hidden(by display/ css property) and also the content which is visible on the screen

// while these only gives the text innerHTML gives the content as well as the tag (the same way it is written on .html)



test.innerHTML = "<h2>what the hell </h2>"  //change the innerHTML(also tag need to mention)
test.innerText = "this is testing the colour" // changes the html text (here tag need not to mention)
test.textContent = "is this what you mean" 

console.log(test.id)   //fetches test element id
console.log(test.className)  //fetched test element className
console.log(test.getAttribute('class')) // fetches id, class

// we can also change the attribute value
test.setAttribute('class', 'h1Class heading')
console.log(test.className)

//With dom style of tag can also be changed
test.style.backgroundColor = 'gray'
test.style.padding = '15px'

// QUERYSELECTOR
//for class :- .
//for id ;- #

//General query selector
const query = document.querySelector('h1')

//Also we can select input fields
const ip = document.querySelector('input[type="password"]')
console.log(ip)

//query selector on list
const myUl = document.querySelector('ul') // Firstly select ul then use .querySelector again to get li
myUl.querySelector('li').style.backgroundColor = 'pink'


//QUERYSELECTORALL
const li = document.querySelectorAll('li')
console.log(li) //return nodelist of items containing li // typeof is object but nodelist is kind of array

li[0].style.color = 'red' // nodeList is kind of array

// we can apply forEach loop // Why?? // because when we check prototype we see forEach which mean we can apply forEach on it.
// To see what we can apply check[[Prototype]]

li.forEach((single) => {
    single.style.backgroundColor = 'cyan'
})


const clas = document.getElementsByClassName('list')   //returns HTMLCollection
console.log(clas)
// when i check prototype there is no option for any loooping method then how will I loop??
//We need to convert HTMLCollection into array to use loops and all. Also we can also convert the nodelist into array
const arrayClas = Array.from(clas)    //with this command we convert into array
console.log(arrayClas)