// Object Destructuring 
// Object Destructuring is a syntax that allows you to extract multiple properties from an object and assign them to variables.
// const variableName = someObject

//const { propertyName, propertyName2, etc } = someObject;

const burrito = { cheese: 'pepperjack', beans: 'black', meat: 'carnitas', salsa: 'pico', tortilla: 'flour' };

// Normal way to access properties on an object
const cheese = burrito.cheese;
const beans = burrito.beans;
const meat = burrito.meat;
const salsa = burrito.salsa;
const tortilla = burrito.tortilla;

// Destructuring way to access properties on an object
const { cheese, beans, meat, salsa, tortilla } = burrito;

// Destructuring rules:
// 1. The variable names on the left side of the assignment must match the property names on the right side.
// 2. You can rename variables when destructuring by using a colon (:) after the property name on the right side and then specifying the new variable name on the left side.
const { cheese: myCheese, beans: myBeans, meat: myMeat, salsa: mySalsa, tortilla: myTortilla } = burrito;
// 3. You can also set default values in case the property does not exist on the object. This is done by using an equals sign (=) after the property name on the left side.
// 4. names must match exactly unless you rename them, otherwise it will return undefined.
const { cheese: myCheese2, beans: myBeans2, meat: myMeat2, salsa: mySalsa2, tortilla: myTortilla2, guacamole = 'not included' } = burrito;
// 5. order of the names does not matter when destructuring, it will always pull the values from the object based on the property names.

// Example of using destructuring in a function
const userSettings = {
  username: 'johnDoe',
  theme: 'dark',
  notifications: true,
};
getThemeClass(userSettings); // 'dark'

//Normal way to access properties in a function
function getThemeClass(settings) {
  const theme = settings.theme + "-" (settings.dark ? "d" : ""); // normal way to access properties
  return theme;
}

//Destructuring way to access properties in a function
function getThemeClass({ theme, dark }) { // destructuring the settings object directly in the function parameters
  const themeClass = theme + (dark ? "-d" : ""); // using destructured variables
  return themeClass;
}
