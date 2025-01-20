// list of arrays
//Example:
//number of items is 6: a b c d e f
//position of each item is: 0 1 2 3 4 5
//the first item always begins with 0
//the last item is the number of items -1

var customerNames = [];
customerNames.push('Sam Smith'); //position 0
customerNames.push('Tommy Guns'); //position 1

console.log(customerNames[0]); //prints Sam Smith

for (let i = 0; i < customerNames.length; i++) {
  console.log(customerNames[i]); //prints Sam Smith & Tommy Guns
}

for (name of customerNames) {
  console.log(name);
}

//alert("It's working!");

// Let's look at a Grade Book Example.
// Imagine that I have a College Programming Course that has 5 coding assignments.
// For our example, I will set the values of the grades.

//Coding Challenge:  As a stretch, you could convert these examples to use prompt()
// and alert() as was described in the User Input Section of Week 2: Weekly Videos
// and Curriculum (e.g. request the Student name, and the grades).
var loggedIn = false;
var attempts = 0;
var maxAttempts = 3;
var studentNames = ['Samuel', 'Sarah', 'Susan', 'Crystal', 'Corinne'];
var grades = ['A', 'B', 'C+', 'B-', 'F'];

while (!loggedIn && attempts < maxAttempts) {
  let inputStudentName = prompt('Student Name');
  let index = studentNames.indexOf(inputStudentName);
  if (index !== -1) {
    alert(inputStudentName + "'s Grade is a(an) " + grades[index]);
    loggedIn = true;
  } else if (inputStudentName) {
    attempts++;
    alert('Student not listed. Attempt ' + attempts + ' of ' + maxAttempts + '\nAvailable students: ' + studentNames.join(', '));
  } else {
    alert("Please enter a student's name.");
  }
  
  if (attempts >= maxAttempts) {
    alert('You are locked out.');
  }
}



var fullName = ['Mary Fuerer', 'Stacy Calls', 'Kevin Smith', 'Paul Mitchell', 'Steven Turner'];
var assignmentOne = [100, 39, 80, 90, 100];
var assignmentTwo = [98, 45, 100, 92, 70];
var assignmentThree = [90, 55, 55, 100, 90];
var assignmentFour = [100, 0, 90, 80, 100];
var assignmentFive = [100, 66, 95, 90, 80];
var studentIndex = 1;
var totalScore = assignmentOne[studentIndex] + assignmentTwo[studentIndex] + assignmentThree[studentIndex] + assignmentFour[studentIndex] + assignmentFive[studentIndex];
var averageScore = totalScore / 5;
var result = averageScore;

console.log('Student: ' + fullName[studentIndex])
console.log('Grades:')
console.log('1: ' + assignmentOne[studentIndex]);
console.log('2: ' + assignmentTwo[studentIndex]);
console.log('3: ' + assignmentThree[studentIndex]);
console.log('4: ' + assignmentFour[studentIndex]);
console.log('5: ' + assignmentFive[studentIndex]);
console.log('Average Score: ' + averageScore.toFixed(2));
console.log('Result: ' + result);

if (averageScore >= 60) {
    console.log('Passed');
} else {
    console.log('Failed! See me after class!');
}