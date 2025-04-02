// Declarative Code
// The code says what to do.

// Imperative Code
// The code says how to do it.

// Example: Making a cake
// Declarative Code
function makeCake() {
  mixIngredients();
  bake();
  decorate();
}

// Imperative Code
function makeCake() {
  // Step 1: Mix ingredients
  let batter = [];
  batter.push('flour');
  batter.push('sugar');
  batter.push('eggs');
  batter.push('milk');
  mix(batter);

  // Step 2: Bake
  let cake = bake(batter);

  // Step 3: Decorate
  decorate(cake);
}

// Declarative Code
// Think of this like a queen giving a command to her subjects.
// "I declare I would like this to happen."

// Imperative Code
// Think of this like a soldier following orders.
// "I will do this step by step."

// Declarative Code
const foundItem = Array.find(item => item.id === 3); // How are you going to find that item, "That's not my job, I am queen."

// Imperative Code
let result
for (let i = 0; i < array.length; i++) {
  if (array[i].id === 3) {
    result = array[i];
    break;
  }   
}

// Declarative Code
// Mostly expressions
// Array methods
// .map()
// .filter()
// .reduce()
// .find()
// .some()
// .every()
// .forEach()
// .includes()
// .indexOf()
// .slice()
// .splice()
// .concat()
// .join()
// .flat()
// .flatMap()
// .sort()
// .reverse()
// .push()
// .pop()
// .shift()
// .unshift()
// .fill()
// .copyWithin()
// .keys()
// .values()
// .entries()
// .at()
// .toString()

// Ternary operator

// Imperative Code
// Mostly statements
// Loops
// for
// while
// do while
// if
// switch
// try
// catch
// throw
// break
// continue
// return
// with
// label
// debugger
// async
// await
// import
// export
// class
// extends
// super
// this
// new
// instanceof

// If statements

// Expression vs Statement
// An expression is a piece of code that simplifies to a value.
// A statement is a piece of code that performs an action.
// An expression can be a statement, but a statement cannot be an expression.
// Example of an expression
const x = 5; // This is an expression because it simplifies to a value (5).
// Example of a statement
if (x > 0) {
  console.log('x is positive'); // This is a statement because it performs an action (printing to the console).
}
// Example of a statement that is also an expression
const y = (x > 0) ? 'positive' : 'negative'; // This is a statement because it performs an action (assigning a value to y), but it is also an expression because it simplifies to a value ('positive' or 'negative').
// Example of a statement that is not an expression
function foo() {
  console.log('Hello, world!'); // This is a statement because it performs an action (printing to the console), but it is not an expression because it does not simplify to a value.
}
// Example of an expression that is not a statement
const z = 5 + 3; // This is an expression because it simplifies to a value (8), but it is not a statement because it does not perform an action.
// Example of a statement that is not an expression
const a = 5; // This is a statement because it performs an action (assigning a value to a), but it is not an expression because it does not simplify to a value.
// Example of an expression that is also a statement
const b = (5 + 3) * 2; // This is a statement because it performs an action (assigning a value to b), but it is also an expression because it simplifies to a value (16).
// Example of a statement that is not an expression
const c = 5; // This is a statement because it performs an action (assigning a value to c), but it is not an expression because it does not simplify to a value.
// Example of an expression that is not a statement
const d = 5 + 3; // This is an expression because it simplifies to a value (8), but it is not a statement because it does not perform an action.
