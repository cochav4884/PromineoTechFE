const key1 = Symbol("key");
const key2 = Symbol("key");
const obj = {};

obj[key1] = "value1";
obj[key2] = "value2";

console.log(obj[key1]); // logs "value1"
console.log(obj[key2]); // logs "value2"// Assuming you meant to close this line with ])

let bigNumber = 9007199254740993n;
let largeNumber = BigInt(123456789012345678901234567890); 
console.log(bigNumber);
console.log(largeNumber);
       
var itemPrice = 26.74;
if (typeof itemPrice !== "undefined") {
    console.log(typeof itemPrice);
}
       
var luckyNumber = 19;
if(luckyNumber !== 'undefined'){
    console.log(typeof luckyNumber);
}

var fullName = "Johnny Appleseed";
console.log(typeof fullName); //prints: string
console.log(fullName); //prints: Johnny Appleseed

var isHotOutside = false;
console.log(typeof isHotOutside); //prints: boolean

let isHungry = true;
let craving = "italian food";

if(isHungry !== 'undefined' && craving !== 'undefined'){
    console.log(typeof isHungry);  
    console.log(typeof craving);
    console.log(isHungry);
    console.log(craving);
}

var firstName = "Corinne";
var lastName = "Padilla";
var fullName = (firstName + " " + lastName);

if(firstName !== 'undefined' && lastName !== 'undefined' && fullName !== 'undefined'){
    console.log(typeof firstName);
    console.log(typeof lastName);
    console.log(typeof fullName);
    console.log(fullName === `${firstName} ${lastName}`)
}