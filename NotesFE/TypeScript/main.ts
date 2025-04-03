let studentName = "Patrick"
const quizScore = 98

function isPassing(score: number) {
    if (score < 60) {
        return false
    } else {
        return true
    }
}

let passed = isPassing(quizScore)
console.log("Quiz passed: " + passed)

// Benefits of TypeScript
// 1. Catches errors easier
// Many errors will only come up in specific scenarios, but type-checking can find them easily.
// 2. Catch errors sooner
// You can find type errors as you're writing the code instead of when it runs.
// 3. Built in documentation
// The code tells you what parameters to pass or what a variable will be.

const reviewsContainer = document.getElementById("reviews-container")
const reviewStarsSelect = document.getElementById("review-stars-select")
const reviewTextarea = document.getElementById("review-textarea")

/**
 * Render a list of reviews
 */
// Initialize an array to store reviews
let reviewList: Review[] = [];

/**
 * Render a list of reviews
 */
function renderReviewList() {
    // Clear out anything from previous renders
    if (reviewsContainer) {
        reviewsContainer.innerHTML = "";
    }

    // If there's no reviews, show an empty message
    if (reviewList.length === 0) {
        if (reviewsContainer) {
            reviewsContainer.innerHTML = "No reviews yet";
        }
        return;
    }

    // For each review, map it to a div, then append that div to the container
    reviewList.map(renderReview).forEach(div => reviewsContainer?.appendChild(div));
}

/**
 * Render on review
 */
// TYPESCRIPT CHANGE: The review parameter is typed with the Review custom type
interface Review {
    id: number;
    content: string;
    rating: number;
}

function renderReview(review: Review): HTMLElement {
    const reviewDiv = document.createElement("div");
    reviewDiv.textContent = `Rating: ${review.rating}, Content: ${review.content}`;
    return reviewDiv;
}

// TypeScript is a more Strongly Typed Code vs JavaScript is a more Loosely Typed Code

// Implicit conversion is convenent...
// console.log( 5 * "3" ) // 15
// TypeScript adds Number to clarify what you are asking.
console.log( 5 * Number("3") ) // 15
// ...but prone to bugs
console.log( 5 + "3" ) // 53
/**
 * Strongly Typed: Don't allow implicit type conversions
 */
// Java
// C#
// Python
// TypeScript
// C++
// PHP
// JavaScript
/**
 * Loosely Typed: Allow many implicit type conversions
 */

// All valid JavaScript code is valid TypeScript code.

// When are the types checked?
/**
 * Statically Typed: Check the types when the code is compiled. Variables can only hold that type.
 */
// Java: Statcially Typed: String name = "Patrick"
// C#: Statically Typed: string name = "Patrick"
// TypeScript: Statically Typed: let name: string = "Patrick"
// C++
// Python: Dynamically Typed: name = "Patrick"
// PHP: Dynamically Typed: $name = "Patrick"
// JavaScript: Dynamically Typed: let name = "Patrick"
/**
 * Dynamically Typed: Check the types when the code runs. These can do not have types and the variables can be switched around. This is flexible, but is prone to bugs.
 */
// TypeScript makes JavaScript Statically Typed. * Types are checked at compiled times.*

// Compiled Languages
// Compile = convert the high-level code into low-level instructions all at once.
// Interpreted Languages
// Interpret = convert the high-level code into low-level instructions as each line runs.
// TypeScript is a compiled version of JavaScript...kindof.
// TypeScript is a transpiled version of JavaScript because it does not translate to a low-level instruction, it translates to another high-level instrunction.

// Transpiled Languages
// Tranpile = convert the high-level code into other high-level code.
// Example:
/**
 * Write TypeScript
 * Transpile & Type Check
 * JavaScript
 * Interpret & Run
 */
 



/**
 *                                                     Strong: Don't allow implicit type conversions
 * 
 * 
 *                  Java
 *                  C#                          
 *                                                                          Python
 *                 TypeScript
 * 
 * Static: Check types when the code is compiled                                              Dynamic: Check types when the code runs
 *                  C++
 *                                                                          PHP
 *                                                                         JavaScript
 * 
 * 
 * 
 *                                                     Loose: Allow many implicit type conversions
 */




/**
 * TypeScript is our Type System for Funcitonal Programming!
 */

// TypeScript
// let Studentname: string = "Patrick"
// const quizScore: number = 98

// function isPassing(score: number): boolean {
//     if(score < 60) {
//         return false 
//     } else {
//         return true 
//     }
// }

// let passed: boolean = isPassing(quizScore)
// console.log("Quiz passed: " + passed)

//JavaScript
// let studentName = "Patrick"
// const quizScore = 98

// function isPassing(score) {
//     if(score < 60) {
//         return false 
//     } else {
//         return true 
//     }
// }

// let passed = isPassing(quizScore)
// console.log("Quiz passed: " + passed)

/**
 * TypeScript Types
 */
// Old Friends (boolean, string, number, undefined, null)
// New Friends (any = anything is fine, never give a type error - the normal JavaScript behavior,
// void = give a type error if I try to use this as a real value - used to indicate that a function doesn't return anything,
// never = we should never get here - a function that will always error out could return never)

// Variables
// To put a type on a variable you add a colon(:) and the type
// Example:
// const a = 3; add colon(:) & number 
// const a: number = 3
// but you don't need to because it's obvious; we usually only put types on variables if the type is more complicated.

// Functions
// You can specify a return type
function divide(a: number, b: number): number {
    return a / b 
}
// But you usually don't need to
function add(a: number, b: number) {
    return a + b 
}

// Array Types
function handleTagsAndCategories(
    // two options for typing as an array
    // either is great, but many prefer the second way
    tags: string[],
    categories: Array<String>
) {
    // do something
}

// Object Types
function doSomething1(
    // must have these properties, but can have more 
    email: {
        id: number
        author: string
        message: string
        read: boolean
    },
) {
    // do something1
}

// Optional Properties
function doSomething2(
    user: {
        id: number 
        name: string 
        // It can have a role property, but doesn't have to
        role?: string 
    },
) {
    // do something2
}

// Callback Types
// The callback type has to have parameter names
// but the names don't have to match the actual
function doSomething(
    callback1: (name1: string) => boolean,
    callback2: (name2: number) => void
) {
    const result = callback1("example");
    if (result) {
        callback2(42);
    }
}

// Union Types
function doSomething3(
    // the number 1 or 2 or 3
    priority: 1 | 2 | 3,
    // a string or a number
    id: string | number,
    // a number or the string "auto"
    width: number | "auto",
    // a string or null
    name: string | null 
) {
    // do something3
}

// Narrowing a Union type
function doSomething4(
    amount: number | string, 
) {
    if(typeof amount === "string") {
        // we can safely use a string method here
        console.log(amount.toLowerCase())
    } else {
        // and a number method here
        console.log(amount.toFixed(2))
    }
}

// Reusing Types 
type SmallNumber = 1 | 2 | 3

type User = {
    id: number 
    name: string 
    role?: string 
}

function doSomething5(amount: SmallNumber, user: User) {
    // do something5
}


// Using TypeScript involves a lot of research to find what you need to type and don't know how to.