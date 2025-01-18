//alert("It's working!");

console.log('Hello, world!');

// var name = window.prompt('What is your name?');
// window.alert(`Welcome, ${name}`); //alerts: What is your name?, input name and click okay, alerts: Welcome {name} click okay

//Example 1: Does not continue prompting even after incorrect info input
// let username = prompt('Username:');
// let password = prompt('Password:');

// if (username == 'samy123' && password == '12345') {
//   alert('Welcome back, ' + username);
// } else {
//   alert('Incorrect username or password.');
// }

//Example 2: Does continue prompting until correct info input
// var loggedIn = false; //loop stays open until false becomes true

// while (!loggedIn) {
//   let username = prompt('Username:');
//   let password = prompt('Password:');

//   if (username == 'samy123' && password == '12345') {
//     alert('Welcome back, ' + username);
//     loggedIn = true; //loop closed now that false is true
//   } else {
//     alert('Incorrect username or password.');
//   }
// }

//Example 3: added login atttempt count to end loop, message: "You are locked out"
var loggedIn = false; //loop open while not logged in
var attempts = 0;
var maxAttempts = 3; //Max number of login attempts

while (!loggedIn && attempts < maxAttempts) {
  let username = prompt('Username:');
  let password = prompt('Password:');

  if (username == 'samy123' && password == '12345') {
    alert('Welcome back, ' + username);
    loggedIn = true; //close loop when logged in
  } else {
    attempts++;
    alert('Incorrect username or password.');

    if (attempts >= maxAttempts) {
        alert('You are locked out.');
        break; //Exit the loop if attempts exceed maxAttempts
    }
  }
}