// Spreading an Array
// Copying the items of an array* into a new array

// Arrays are like sandwiches, they can be filled with ingredients (items). The spread operator allows us to copy all the ingredients from one sandwich (array) into another sandwich (array).
const sandwich1 = ['bread', 'lettuce', 'tomato', 'cheese'];

// Normal way to copy an array (without spread operator)
const sandwich2 = Array.from(sandwich1); // This copies sandwich1 items into sandwich2
console.log(sandwich2); // ['bread', 'lettuce', 'tomato', 'cheese']

// Spread operator to copy an array
const sandwich3 = [...sandwich1]; // This copies sandwich1 items into sandwich3 using the spread operator
console.log(sandwich3); // ['bread', 'lettuce', 'tomato', 'cheese']

// Adding to the Array
const copyOfSomeArray = [...someArray, newItem]; // This will copy all items from someArray and add newItem to the end of the new array.
console.log(copyOfSomeArray); // ['item1', 'item2', 'newItem'] (assuming someArray was ['item1', 'item2'] and newItem was 'newItem')

// for example:
const sandwich4 = [...sandwich1, 'mustard']; // This copies all items from sandwich1 and adds 'mustard' to the end of the new array.
console.log(sandwich4); // ['bread', 'lettuce', 'tomato', 'cheese', 'mustard']