// data types
// // variable declaration or name: bankAccountBalance
// thisIsCamelCase, thisIsTheStandardConventionForVariablesInJavascript
// place an operator to the right side of the variable: = this is the assingment opertor or equal sign
// assign a value for your variable: 52.10
// finish with a semi-colon: ; a ; is like a periods in Javascript, whenever you end a statement you want to put a ;
var bankAccountBalance = 52.10;
// strings are expressed using double quotes "" or single quotes ' '
// strings are alphnumeric/text values
// once assigned to a var the computer will look for firstName the computer will refer to firstName as Tom
var firstName = "Tom";
var lastName = 'Sawyer';

// adding customer to FirstName allows the first name to be different. now the computer will refer to customerFirstName as Sam
var customerFirstName = "Sam";
var customerLastName = "Jones"

// numeric data is expressed using numbers with or without decimals: 5, 52.10
var numberOfFriends = 5;
// boolean data is expressed as true or false written out without any quotes
var isHotOutside = false;
var isHappy = true;

// example script tag for using JavaScript
/*
<html>
    <head>
        <script src="index.js"></script>
    </head>
</html>
*/

console.log('Hello World!');

// arithmatic operators: +(addition) -(subtraction) *(multiplication) /(division)
// operands are the numbers on either side of the operator: 5 and 3
console.log(5 + 3);
console.log(4 - 2);
console.log(6 * 7);
console.log(8 / 2);

console.log(bankAccountBalance - 30);
console.log(bankAccountBalance * numberOfFriends);

// The equality operator consists of two equal signs: ==
// The result of an equality operator is a boolean value: true or false
console.log(5 == 5);
console.log(5 == 6);
console.log(bankAccountBalance == numberOfFriends);
console.log(bankAccountBalance == 52.10);


// console.log(bankAccountBalance = bankAccountBalance - 5);
// short-hand notation: -=
// console.log(bankAccountBalance -= 5);

// console.log(bankAccountBalance = bankAccountBalance + 5);
// short-hand notation: +=
console.log(bankAccountBalance += 5);