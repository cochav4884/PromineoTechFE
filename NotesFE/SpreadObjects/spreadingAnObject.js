// Spreading an Object
// The spread operator can be used to copy properties from one object to another, or to merge multiple objects into one.
// Copying the properties of an object* into a new object
const copyOfSomeObject = { ...someObject }; // Copying the properties of someObject into a new object called copyOfSomeObject 

// Objects are like burritos, they can be filled with properties. The spread operator allows us to copy all the properties from one burrito (object) into another burrito (object).
const burrito1 = {
   chesse: 'cheddar',
   beans: 'black beans',
   rice: 'brown rice',
};

// Normal way to copy an object (without spread operator)
const burrito2 = Object.assign({}, burrito1); // This copies burrito1 properties into burrito2
console.log(burrito2); // { chesse: 'cheddar', beans: 'black beans', rice: 'brown rice' }

// Using the spread operator to copy an object
const burrito3 = { ...burrito1 }; // This copies burrito1 properties into burrito3 using the spread operator

// Overwriting properties while copying
const copyOfSomeObject1 = { ...someObject, propertyName: value }; // This will copy all properties from someObject and overwrite/add the propertyName with value.
console.log(burrito3); // { chesse: 'cheddar', beans: 'black beans', rice: 'brown rice' }

// Real-world example of merging objects
const settings = {
   theme: 'luna',
   dark: false, // Default theme is light
   showBar: true, // Show the navigation bar by default
};

// {theme: 'luna', showBar: true, dark: true }
// Spread Operator to merge settings with overrides
const copy = {
    ...settings, dark: true // Override the dark property to true while merging
}
console.log(copy); // { theme: 'luna', dark: true, showBar: true }

