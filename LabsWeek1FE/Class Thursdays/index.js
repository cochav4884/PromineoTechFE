console.log('Hello, World');

/*
var - do not use it anymore - old code
let - use this
const - use this
*/
//give variables a desciptive name
let name = "Corinne's"; 
let element = '<div class="header">Goodbye Every Student\'s Dog</div>'
console.log(name);
console.log(element);

let firstName = 'Corinne';
let lastName = 'Padilla';
let fullName = lastName + ", " + firstName; //concatenation
console.log(fullName);

//tax * 0.025
//console.log('Ha. Lower taxes!');

let age = 49; //number, whole
let isOld = false; //true or false
let isColdOut = true;

age = 'old';

let birthYear = 1979;
let currentYear = 2025;
let personAge = currentYear - birthYear;
console.log(name + ' will turn ' + personAge + ' this year ' + currentYear);

let squareFoot = 12 * 12; //Inches
let SQUAREFOOT = 12 * 12;
let fiftyYardLine = 100 / 2;

let name1 = 'Bob';
let name2 = "Bob";
let name3 = "bob";

console.log(name1 == name2); //boolean
console.log(name1 == name3);

// Fahrenheit -> Cslsius
// (F - 32) * 5 / 9
let temperature = 78; // 25.56
let clesius = (temperature - 32) * (5 / 9);
console.log(temperature + "F => " + clesius + "C");

//EXPERT:
//Declare a variable hta tholds a number greater than 1000 but less than 10000
//
//Break down the number into a mathmatics equation that adds each power
//of 10 together.
//
//For example if you defined the number 5329, the expected output would be:
//
//500 + 300 + 20 + 9 = 5239

let number = 5329;

//Get the first digit by itself (5) then times by its place value thousands
let thousands = parseInt(number / 1000, 10) * 1000;
let hundreths = parseInt((number % 1000) / 100, 10) * 100;
let tenths = parseInt((number % 100) / 10, 10) * 10;
let ones = number % 10;
// console.log(thousands);
// console.log(hundreths);
// console.log(tenths);
// console.log(ones);
console.log(thousands + " + " + hundreths + " + " + tenths + " + " + ones + " = " + number);