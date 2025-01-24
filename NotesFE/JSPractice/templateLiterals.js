// alert ("It's working!");

//new way to write strings in ES6
let myString = `Hello
World
my name
is Corinne.`;

console.log(myString); //this will print the string above

//old way to write strings
let anotherString = 'Hello\nWorld\nmy name\nis Corinne.';

console.log(anotherString); //this will print the same thing as the string above

//another way to write strings
let yetAnotherString = 'Hello' + 
'\n' + 'World' + 
'\n' + 'my name' + 
'\n' + 'is Corinne.';

console.log(yetAnotherString); //this will print the same thing as the other two strings

//string interpolation - useful for taking a template or code and making it dynamic
console.log(`Six times five = ${5*6}`); //this will print "Six times five = 30"