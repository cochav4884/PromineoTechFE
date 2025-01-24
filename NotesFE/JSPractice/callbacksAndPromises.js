//alert ("It's working!");

//JavaScript is single-threaded, meaning it can only do one thing at a time
//JavaScript is asynchronous, meaning it can do multiple things at once
//JavaSctipt was built to be event-driven

let username = sentHttpRequest('getUser');
console.log(username); //this will print undefined because the request hasn't been completed yet

//callbacks
// //Callbacks are a way to work around this limitation
//Callbacks are functions that are passed to other functions as arguments
//Callbacks are executed after the function they are passed to has finished executing
function logUsername(user) {
  //this is the callback function
  console.log(user);
}

sendHttpRequest('User', logUsername); //this is the function that takes the callback function as an argument and executes it after it has finished executing the request function above

sendHttpRequest('getUser', (user) => console.log(user)); //this is the same as the two lines above

//Promises
//Promises are a way to handle asynchronous code
//Promises are objects that represent the eventual completion or failure of an asynchronous operation, when this resolves, the promise is fulfilled, and when it rejects, the promise is rejected   
//Promises have three states: pending, fulfilled, and rejected
function handleEvent(value) { //this is the callback function
    console.log(value); //this will print the value of the promise
}

function handleError(error) { //this is the callback function
    console.log(error); //this will print the error of the promise
}

doSomethingThatReturnsAPromise() //this is the function that returns a promise
    .then(handleEvent) //this is the function that takes the callback function as an argument and executes it after it has finished executing the request function above
    .catch(handleError); //this is the function that takes the callback function as an argument and executes it after it has finished executing the request function above