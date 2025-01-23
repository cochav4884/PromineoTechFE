// Write modulized code to implement the following functions: (Can reuse code from previous exercises)
// writing a function is just the instructions; you need to call/run the function by invoking it
function myFunction() {
    for(let i = 0; i < 100; i++) {
        console.log(i);
    }
}

// invoke the function
// any programming function can got inside the parantheses called parameters
// make sure that a function is only responsible for doing one thing to keep it modular (clear and concise)
myFunction();

// function with 2 parameters
//pass values through to make it dynamic
function createFullName(firstName, lastName) { //these two values will be passed in and you can use them in the function
    console.log(firstName + " " + lastName); // will print out the full name
}


//
//function createFullName (firstName, lastName) {
 //   return firstName + " " + lastName;
//}

// call the function //pass in the arguments
createFullName("Tom", "Saywer"); // prints out Tom Saywer

// parameters are like variables that are passed into a function and are only placeholders
// give discriptive names to your parameters to make it easier to understand; they should be verbs because they are actions

