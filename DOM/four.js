// adding li using fn
// Method - 1 (Not well optimized due to innerHTML. Should avoid in large projects)
function addLi(lang){
    let li = document.createElement('li')
    li.innerText = `${lang}`
    document.querySelector('.list').appendChild(li)
}
addLi('javascript')


// Method - 2 (better way using createTextNode)
function addBetter(lang){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${lang}`))
    document.querySelector('.list').appendChild(li)
}
addBetter('golang')

//Editing li

const li = document.querySelector('li:nth-child(2)')
//li.innerHTML = 'MOjo'
const newLi = document.createElement('li')
newLi.textContent = "mojo"
li.replaceWith(newLi)

// Removing li
const lastLang = document.querySelector('li:last-child')
lastLang.remove()