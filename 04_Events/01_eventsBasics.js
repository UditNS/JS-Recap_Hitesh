const div = document.querySelector('.hell')
div.style.padding = '20px'
div.style.backgroundColor = 'green'
div.style.color = 'rgba(106, 38, 223, 1)'

div.addEventListener('click', (e) => {
    console.log(e)
}, false)

//third parameter -> event propogation
/* 
Event Propogation has two context
1. Event bubling.  -> false (default)
2. Event capturing -> true

When you click (or trigger any event) on an element inside the DOM, the event doesn’t just stay on that element. It travels through the DOM tree in a defined order.

There are two main contexts (phases) of propagation:

Event Bubbling (default)
The event starts at the target element and then bubbles upward through its ancestors.

Order: child → parent → grandparent → ... → document → window.

Event Capturing (a.k.a. trickling)
The event starts from the top (window/document) and trickles downward to the target element.

Order: window → document → parent → child (target)
*/


// What to study
// 1. type -> keyboard, mouse
// 2. timestamp
// 3. defaultPrevent
// 4. target
// 5. toElement
// 6. srcElement, currentTarget

// Interview Related
/*
1. clientX
2. clientY
3. screenX
4. screenY
*/

// Keyboard Key -> altKey, ctrlKey, shiftKey, keyCode