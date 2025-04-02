// Array Destructuring
// Array destructuring is a syntax that allows you to extract multiple elements from an array and assign them to variables.
// const variableName = someArray;

// const [firstElement, secondElement, thirdElement] = someArray;
const sandwich = ['bread', 'lettuce', 'tomato', 'cheese', 'ham'];

// Normal way to access elements in an array
const bread = sandwich[0];
const lettuce = sandwich[1];
const tomato = sandwich[2];
const cheese = sandwich[3];
const ham = sandwich[4];

// Destructuring way to access elements in an array
const [breadType, lettuceType, tomatoType, cheeseType, hamType] = sandwich;

// Destructuring rules:
// 1. The order of the variables on the left side of the assignment must match the order of the elements in the array on the right side.
// 2. You can skip elements in the array by using commas without assigning them to a variable.
const [breadType2, , tomatoType2, cheeseType2] = sandwich; // skips 'lettuce' and assigns 'tomato' and 'cheese'
// 3. You can also set default values in case the array does not have enough elements. This is done by using an equals sign (=) after the variable name on the left side.
const [breadType3, lettuceType3 = 'defaultLettuce', tomatoType3 = 'defaultTomato', cheeseType3 = 'defaultCheese'] = sandwich;
// 4. order of the names does matter when destructuring arrays, it will always pull the values from the array based on the index positions.
// 5. names do not have to match anything in the array, you can name them whatever you want as long as the order matches the array elements.

// Example of using destructuring in a function
const coordinates = [10, 20]; // x and y coordinates

// Normal way to access elements in a function
function getCoordinates(coords) {
  const x = coords[0];
  const y = coords[1];
  return `X: ${x}, Y: ${y}`;
}

// Destructuring way to access elements in a function
function getCoordinates([x, y]) { // destructuring the array directly in the function parameters
  return `X: ${x}, Y: ${y}`; // using destructured variables
}

// Returning two things from a function using array destructuring
function functionName() {
  return someArray; // returning an array, for example: return [true, 'success'];
}
const variableName = functionName(); // this will be [true, 'success']

function functionName() {
    return someArray
};
const [result1, result2, result3] = functionName(); // this will destructure the array returned from the function into individual variables
// Real-world example of normal function returning an array and destructuring it:
const fetchArrows = () => {
    return ['←', '↑', '→', '↓']; // returning an array of arrow characters
};
const pair = getArrows(); // this will be ['←', '↑', '→', '↓']
const left = pair[0]; // '←'
const up = pair[1]; // '↑'
const right = pair[2]; // '→'
const down = pair[3]; // '↓'

// Real-world example of array destructuring in a function
const getArrows = () => {
  return ['←', '↑', '→', '↓']; // returning an array of arrow characters
};
const [leftArrow, upArrow, rightArrow, downArrow] = fetchArrows(); // destructuring the array returned from the function into individual variables
