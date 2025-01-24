//alert ("It's working!");

//arrow functions bind the value of 'this' to the surrounding context
//they are useful for callbacks
//they are useful for anonymous functions
//they are useful for functions that are not methods
//they are useful for functions that don't need 'this'

//use const for functions so they can't be changed later on in the code
let createFullName = (firstName, lastName) => `${firstName} ${lastName}`; //const createFullName = (firstName, lastName) => `${firstName} ${lastName}`; //this is the same as the line below
//let createFullName = (firstName, lastName) => firstName + " " + lastName; //this is the same as the line above

//if you have multiple lines you need curly braces and a return statement
//if you have one parameter you don't need parentheses
//if you have zero parameters you need parentheses
let someFunction = (a, b) => {
    let result = '';
    for (let i =0; i < a.length; i++) {
        result += a;
    }
    return result;
}
console.log(createFullName("Corinne", "Barnes")); //this will print "Corinne Barnes"
console.log(someFunction("hello", 3)); //this will print "hellohellohello"