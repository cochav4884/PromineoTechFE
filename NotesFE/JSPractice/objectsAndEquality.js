// Objects are structures that locgicially groups data and functionality together.
// Objects are created using curly braces {}. They are used to store multiple values in a single variable.

//methods are functions that are stored as object properties.
//functions stored as object properties are called methods.
//methods are used to perform actions on objects.
//functions is a standalone piece of functionality.
//method belongs to an object.
var dvdPlayer = {
  //object literal with properties that define it.
  height: 3, 
  width: 18,
  depth: 12,
  weight: 7,
  color: 'black',
  dvdName: 'Mulan',
  printDVDName: function () { //object method to provide some functionality.
    console.log(this.dvdName); //this keyword refers to the object it belongs to. (dvdPlayer)
  },
};

console.log(dvdPlayer.depth); //prints the depth of the dvdPlayer object. (12)
console.log(dvdPlayer.color); //prints the color of the dvdPlayer object. (black)
console.log(dvdPlayer.weight); //prints the weight of the dvdPlayer object. (7)
console.log(dvdPlayer.height); //prints the height of the dvdPlayer object. (3)
console.log(dvdPlayer.width); //prints the width of the dvdPlayer object. (18)
dvdPlayer.printDVDName(); // prints the dvdName of the dvdPlayer object. (Mulan)


//Equality vs Identity (Both are boolean operators)
//Equality (==) checks if the values are equal. Example: (2 == '2' is true) (Use only as a last resort for an exception)
// 3 operators are used to compare values in JavaScript. ==, ===, and !=. 
//Identity (===) checks if the values are equal and the types are the same. Example: (2 === '2' is false) (Use as default as the rule of thumb)

// == is used to compare two values, but it ignores the datatype of variable.
console.log(2 == '2'); //prints true. (2 is equal to '2')

// === is usedto compare two values, but it checks the datatype of variable.
console.log(2 === '2'); //prints false. (2 is not equal to '2')


// != is used to compare two values, but it ignores the datatype of variable.
console.log(2 != '2'); //prints false. (2 is equal to '2')