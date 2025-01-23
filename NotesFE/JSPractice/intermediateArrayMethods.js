//Intermediate Array Methods
let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
let lengths = names.map(function(element) { //map method creates a new array with the results of calling a provided function on every element in the calling array.
    return element.length;
});
console.log(lengths); // [4, 4, 6, 5, 4]
console.log(names); // ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas']

//reducer function to sum the lengths of the names. function(accumulator, currentValue, currentIndex, array) is the first parameter of the reducer function.
let sum = lengths.reduce(function(accumulator, currentValue) { //reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
    return accumulator + currentValue; //accumulator is the total of the previous and current value. //currentValue is the element being processed in the array.
}, 10);

console.log(sum); // 23

//forEach method executes a provided function once for each array element. Does not return a value. (if you need a return value, use map or reduce)
//can use a loop or forEach method to iterate over an array.

names.forEach(function(element) {
    console.log(element);
});

//filter method creates a new array with all elements that pass the test implemented by the provided function.
let evens = names.filter(function(element) {
    return element.length % 2 == 0; //returns even length names.
});
console.log(evens); // ['Eric', 'Nicholas']

//splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let removeElement = names.splice(1, 1); //removes 1 element at index 1.
console.log(removeElement); // ['Tom']
console.log(names); // ['Sam', 'Eric', 'Sally', 'Nicholas']
