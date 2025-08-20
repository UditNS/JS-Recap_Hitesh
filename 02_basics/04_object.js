const obj = new Object() //singleton object
const obj2 = {} // non-singleton object

obj2.id = "human"
obj2.origin = "earth"

const regularUser = {
    name: "udit",
    mail: "uditn007@gmail.com",
    fullname: {
        userFullName: {
            firstName : "Udit Narayan",
            surname : "Singh"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName)
// what if fullname does not exist -> In that case we prefer to use optional chaining

//How to combine 2 or more object into a new object
// const obj3 = {obj1, obj2} Wrong method

const obj3 = Object.assign({}, obj, obj1, obj2); // all the objects after the paranthesis are combined and put onto the {}. If we remove {} then all the objects will combine in obj

// Another method is spread operator
const obj4 = {...obj, ...obj1, ...obj2};

// data from database is generally in form of array of objects
const user = [
    {
        id:1,
        name: "das"
    },
    {
        id:2,
        name: "adas"
    },
    {
        id:3,
        name: "dash"
    }
]

console.log(user[1].id)

// How to fetch keys and values of an object in array (Most important)
console.log(Object.keys(obj2)) // output data type is array 
console.log(Object.values(obj2)) // output data type is array 


// to check whether this property exist or not
console.log(obj2.hasOwnProperty("user"))


// Destructuring 
const user2 = {
    name: "uns",
    email: "em"
}

//we can use the properties of obj with . or [] notation

//this is also used {} -> destructuring
const {email: em} = user2
console.log(em)


// API -> JSON {kind of object}
// JSON -> key:string and value:string
// {
//     "name":"unknown",
//     "userLocation" : "India"
// }