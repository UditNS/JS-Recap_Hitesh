function one(){
    const username = "uns"

    function two(){
        const website = "https://"
        console.log(username)
    }
    // console.log(website)
    two()
}

one()


// function declartion 2 types
// 1 (basic function)
addOne() // works fine 

function addOne(){

} 


// 2 this is also function but sometimes also called as expression
addTwo() // gives error (because we hold function in a variable) // if we use function without variable then we can use the function

const addTwo = function(){

}


// Hoisting
//