//alert("It's working!");

console.log('Hello, world!');

//LOOPS
//without a loop (contains duplicate code and it is not dynamic)
// var cupsOfFlour = 0;

// console.log('Scooping a cup of flour into the bowl');

// cupsOfFlour += 1;

// console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');

// console.log('Scooping a cup of flour into the bowl');

// cupsOfFlour += 1;

// console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');

// console.log('Scooping a cup of flour into the bowl');

// cupsOfFlour += 1;

// console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');

// console.log('Scooping a cup of flour into the bowl');

// cupsOfFlour += 1;

// console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');

// console.log('Scooping a cup of flour into the bowl');

// cupsOfFlour += 1;

// console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');

//with a loop
//while loop
var cupsOfFlour = 0;

while (cupsOfFlour < 5) {

  console.log('Scooping a cup of flour into the bowl');

  cupsOfFlour += 1;

  console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 

}
//for loop
for (var cupsOfFlour = 0; cupsOfFlour < 5; cupsOfFlour++) {

    console.log('Scooping a cup of flour into the bowl');
  
    console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 
  
  }

//for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('whatever is next');

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let names = ['Sam', 'Tom', 'Hillary']; //array - a list of values

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//while loop - checks condition first
//be careful when using an infinite loop...can crash!
// let z = 0;

// while (z < 10) {
//     console.log(z);
// }
let z = 0; //if 110, will never iterate because it is false

while (z < 10) { //condition
    console.log(z);
    z++;
}

//do while loop - checks condition last - will iterate at least once even if false
let q = 110;

while (q < 10) { //condition
    console.log(q);
    q++;
}

do {
    console.log(q);
} while (q < 10)

//Modified for loops
// for in loop
for (i in names) {
    console.log(i); //console.log(names[i]); prints list of names "Sam", "Tom", "Hillary" -- console.log(i); prints the number list of the names: 0, 1, 2
}

//for of loop
for (name of names) {
    console.log(name);
}