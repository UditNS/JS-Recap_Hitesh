const parent = document.querySelector(".parent")
console.log(parent.children)  //selecting children of parent class return HTMLcollection
console.log(parent.children[1].innerHTML) // selected tuesday

// HTMLCollection has .length property in prototype, so we can apply loop

// for(let i=0; i<parent.children.length; i++){
//     console.log(parent.children[i].innerHTML)
// }

//to get first element child
console.log(parent.firstElementChild)  // return <div class="day">Monday</div>
console.log(parent.lastElementChild)
// we moved from parent to child

// Now moving child to parent
const child = document.querySelector('.day') //select the first value only as it is querySelector
console.log(child.parentElement)
console.log(child.nextElementSibling) //gives tuesday


//child nodes
console.log(parent.childNodes)  
//return 9 nodelist but in actual it is just 4 because it count as space/ line break as node