// alert("It's working!");

//Boolean Operators:
// Less than: <
// Greater than: >
// Less than or equal to: <=
// Greater than or equal to: >=
// Equal (type does not matter, i.e. "3" == 3 is true): ==
// Strictly equal (type matters): ===

console.log('Hello, world!');

var num1 = 5;
var num2 = 4;
var num3 = 2;
var num4 = 10;
var num5 = 1;

console.log(num1 == num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 > num2 && num2 > num3);
console.log(num2 == num4 || num5 == num5);

//Boolean Expression: Legally Old Enough To Drive Example:
var ageRequiredToDrive = 16;
var currentAge = 15; //change age here
var canPersonDrive = currentAge >= ageRequiredToDrive;

console.log(canPersonDrive); //will print: true or false

//Conditional Statements to ask if true or false
//Example:
//if (/*Boolean expression*/) {

//code to run if Boolean expression in parentheses evaluates to true}
//using if and else
var firstName = 'Sam';

if (firstName == 'Sam') {
  console.log('Hi Sam!');
} else {
  console.log('Hey, ' + firstName);
}
//using if , else if, and else
var costOfMilk = 2.5;

if (costOfMilk < 2) {
  console.log('We will buy 2 gallons');
} else if (costOfMilk < 3) {
  console.log('We will buy only 1 gallon');
} else {
  console.log('No thanks, way too expensive!');
}
//using switch, default
var grade = 'A';

switch (grade) {
  case 'A':
    console.log('90-100 ' + 'You know your stuff!');
    break;
  case 'B':
    console.log('80-89 ' + 'You did well');
    break;
  case 'C':
    console.log('70-79 ' + 'You just passed');
    break;
  default:
    console.log('0-69 ' + 'You need to study!');
}

//using if, if  vs && statement
//if, if
var a = 5;
var b = 6;

if (a == 5) {
  if (b == 6) {
    console.log('a is 5 and b is 6.');
  }
}
//&& statement (always flatten if statements if there is nothing else inside the outter if statement )
if (a == 5 && b == 6) {
  console.log('a is 5 and b is 6.');
}

//using if, if is okay when you have a divergent path
if (a == 5) {
  if (b == 6) {
    console.log('a is 5 and b is 6.');
  } else {
    console.log('a is 5 but b is not 6');
  }
}

//if Statement-- Legally Old Enough To Drive Example:
var ageRequiredToDrive = 16;

var currentAge = 14;

if (currentAge >= ageRequiredToDrive) {
  console.log('This person can drive'); //nothing will happen because this person is not legally able to drive.
}
//if/else Statement-- Leagally Old Enough To Drive Example:
var ageRequiredToDrive = 16;

var currentAge = 14;

if (currentAge >= ageRequiredToDrive) {
  console.log('This person can drive'); //because this person in not leagally able to drive the if statement drops to the else statement
} else {
  console.log('This person cannot legally drive');
}