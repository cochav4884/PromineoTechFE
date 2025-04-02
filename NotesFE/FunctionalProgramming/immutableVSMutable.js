// Immutable vs Mutable
// Immutable
// Changes are made to copies of the data structure.

// Mutable
// Changes are made directly to the original data structure.

// Immutable Update an Object
someObject = {
  ...someObject,
  property: newValue,
};

// Immutable example:
const initialState = {
  count: 0,
  max: 10,
};

// Increment the count
counter = {
  ...counter,
  count: counter.count + 1,
};

console.log(initialState);
// { count: 0, max: 10 }
console.log(counter);
// { count: 1, max: 10 }

// Mutable example:
const mutableState = {
  count: 0,
  max: 10,
};
let counter = mutableState;

// Increment the count
counter.count++;

console.log(initialState);
// { count: 1, max: 10 }
console.log(counter);
// { count: 1, max: 10 }

// Benefits of Immutable State
// 1. Better for asynchronous code.
// 2. Fewer bugs.
// 3. Easier to maintain.
// 4. More readable.
// 5. Easier to test.
// 6. Easier to reason about.
// 7. Easier to debug.
// 8. Easier to understand.
// 9. Easier to refactor.
// 10. Easier to optimize.

// Downsides of Immutable State
// 1. More memory usage.
// 2. More CPU usage.
// 3. More complex code.

// Immutably Add to an Array
someArray = [...someArray, newItem];

//Immutable
const initialState3 = ['kiwi', 'lemon', 'mango'];
let foodlistImmutable = initialState3;

// Add a new item to the list
foodlist = [...foodlist, 'orange'];

console.log(initialStateRemove); // ["kiwi", "lemon", "mango"]
console.log(foodlist); // ["kiwi", "lemon", "mango", "orange"]

// Mutable
const mutableState2 = ['kiwi', 'lemon', 'mango'];
let mutableFoodlist = mutableState2;

// Add a new item to the list
mutableFoodlist.push('orange');

console.log(initialState); // ["kiwi", "lemon", "mango", "orange"]
console.log(mutableFoodlist); // ["kiwi", "lemon", "mango", "orange"]

// Immutably Remove from an Array
someArray = someArray.filter((item) => item !== itemToRemove);

// Immutable
const initialStateRemove = ['kiwi', 'lemon', 'mango'];
let foodlistImmutableRemove = initialStateRemove;

// Remove an item from the list
foodlist = foodlist.filter((item) => item !== 'lemon');
console.log(initialState); // ["kiwi", "lemon", "mango"]
console.log(foodlist); // ["kiwi", "mango"]

// Mutable
const mutableState3 = ['kiwi', 'lemon', 'mango'];
let foodlistMutableRemove = mutableState3;

// Remove an item from the list
foodlist.splice(foodlist.indexOf('lemon'), 1);
console.log(initialState); // ["kiwi", "mango"]
console.log(foodlist); // ["kiwi", "mango"]

// Immutablity
// Pass by reference
// Variables are set to a referenece
// (objects, arrays, functions)

// Pass by value
// Variables are set to a copy of the value
// (numbers, strings, booleans)

// NOTE: the filter array method and spread  only make a copy at one level.
// If the array contains objects, the objects are still references to the original objects.
// To make a deep copy of an object, you can use the JSON.parse(JSON.stringify(object)) method.
// However, this method has some limitations:
// 1. It does not work with functions.
// 2. It does not work with undefined values.
// 3. It does not work with symbols.
// 4. It does not work with circular references.
// 5. It does not work with Date objects.
// 6. It does not work with RegExp objects.
// 7. It does not work with Map and Set objects.
// 8. It does not work with WeakMap and WeakSet objects.
// 9. It does not work with DOM elements.
// 10. It does not work with custom objects.
// 11. It does not work with class instances.
// 12. It does not work with prototype chains.
// 13. It does not work with getters and setters.

// Immutably Update an Object in an Array
someArray = someArray.map((item) => {
  if (
    item.id !== idToUpdate
      ? item
      : {
          ...item,
          property: newValue,
        }
  ) {
    return item;
  }
});

// Imagine yor have an array with objects and those objects has arrays inside of them.
// Example: (you would have to make copies at each level to change things inside of them.)

let movies = [
  {
    id: 0,
    title: 'Return of the Jedi',
    reviews: [
      { id: 0, rating: 5 },
      { id: 1, rating: 4 },
    ],
  },
  {
    id: 1,
    title: 'The Holiday',
    reviews: [{ id: 2, rating: 5 }],
  },
];

// Immutable Update an Array in an Ojbect in an Array
movies = movies.map((movie) =>
  movie.id !== idToUpdate
    ? movie
    : {
        ...movie,
        reviews: [...movie.reviews, newReview],
      }
);

