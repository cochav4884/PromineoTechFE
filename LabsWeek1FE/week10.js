/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  JavaScript and DOM Manipulation 
   FE Lab Week 10
*/

/* ----------------------------------------------------- */
// Key Term List:
// DOM (Document Object Model)
// Element/node
// CSS Selector (class/id/node)
// Event Listener
//.createElement
//.getElementBy___
//.querySelector
//.append
//.prepend
// element.style.____ = ''
// .innerHTML = 'Hello World'
//

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*------------------------ Creating a website with only JS ------------------------*/
console.log(`-------------------------- 
    Part 1: Create a form with only JavaScript`);

/** 
     *
     * Step 1: Uncomment out the 'console.log(myForm)' at the bottom of the section.
     * Step 2: Using let, make a new variable called 'myForm'.
     * Step 3: Set it to be equal to document.createElement('form') // check the result in the console.
     * Step 4: Repeat steps 2 and 3, but with: myLabel, myInput . This input will be used to enter a name.
     * Step 5: Set the .innerHTML of myLabel to be equal to 'Name'
     * Step 6: Append myLabel to myForm, then append myInput to myForm
     * Step 7: Append myForm to document.body
               You should now have a label and a input on your website.
               Do the same steps, appending a label/input for Email, and a submit button to your form.
     * ↓ YOUR CODE HERE ↓ */
let myForm = document.createElement('form');
let myNameLabel = document.createElement('label');
let myNameInput = document.createElement('Input');

myNameLabel.innerHTML = 'Name';

myForm.append(myNameLabel);
myForm.append(myNameInput);

document.body.append(myForm);

let myEmailLabel = document.createElement('label');
let myEmailInput = document.createElement('input');

myEmailLabel.innerHTML = 'Email';

let mySubmitButton = document.createElement('button');

mySubmitButton.innerHTML = 'Submit';

// Change the button color
mySubmitButton.style.backgroundColor = '#5d8e42'; // leaf green background
mySubmitButton.style.color = 'white'; // White text
mySubmitButton.style.border = '1px solid black'; // Remove the border
mySubmitButton.style.padding = '10px 20px'; // Add some padding
mySubmitButton.style.fontSize = '12px'; // Increase font size
mySubmitButton.style.cursor = 'pointer'; // Pointer cursor on hover
mySubmitButton.style.boxShadow = '3px 3px 10px rgba(0,0,0,0.2)';

myForm.append(myEmailLabel);
myForm.append(myEmailInput);
myForm.append(mySubmitButton);

console.log(myForm);
//Question: Besides changing the innerHTML, what other HTML things can we change using JavaScript?
//Answer: class, id, css, styles, values, properties

/*------------------------ Styling a form with only JavaScript------------------------*/
console.log(`-------------------------- 
    Part 2: Styling our form with only JavaScript`);

/**
 *  Hint: element.style.cssProperty = ''
 * //example:  myForm.style.backgroundColor = 'blue'
 *  Step 1: Change the background color of your form to your favorite color.
 *         (you can use an accepted string, hex (ex: #DBF9FC) or rgb, (ex: rgb(255,122,89)))
 *  Step 2: Change the font color so it's readable over your background color
 *  Step 3: Give your form a display of flex, a flex-direction of column, and a max-width of 250px
 *
 * ↓ YOUR CODE HERE ↓ */
myForm.style.backgroundColor = '#cc7c0b'; // Background color fall orange
myForm.style.color = 'white';
myForm.style.display = 'flex';
myForm.style.flexDirection = 'column';
myForm.style.maxWidth = '250px';
myForm.style.padding = '15px';
myForm.style.margin = '20px auto';
myForm.style.border = '2px solid white';
myForm.style.borderRadius = '8px';
myForm.style.boxShadow = '3px 3px 10px rgba(0,0,0,0.2)';
myForm.style.gap = '10px';
myForm.style.alignItems = 'center';
myForm.style.width = 'fit-content';

//Question: Do you prefer styling with JavaScript or CSS?
//Answer:

/*------------------------ Creating a table with only JavaScript ------------------------*/
console.log(`-------------------------- 
    Part 3: Creating a table with only JavaScript`);

/*
     * Note: Most of these steps are similar to Part 1.
    
     * Step 1: Uncomment out the console.log(myTable) below.       
     * Step 2: Create 4 new table elements: <table>, <tr>, <td>, <td>. Store them in variables using let
     * Step 3: One of your TD elements innerHTML should be 'Name', the other should be 'Email'.
     * Step 4: Append them in the same way that we create a table with HTML.
     * Step 5: Append the finished <table> to your <body>. It should now be on your website. 
              As an added challenge, try to create a complete table with 2 rows, name/email and append it to the body.
    
     * Final Step: Style your table using JavaScript starting with a border. You may need to target more element/nodes than we did with myTable.
     * ↓ YOUR CODE HERE ↓ */
let myTable = document.createElement('table');
let myTr = document.createElement('tr');
let myTdName = document.createElement('td');
let myTdEmail = document.createElement('td');

myTdName.innerHTML = 'Name';
myTdEmail.innerHTML = 'Email';

myTable.append(myTr);
myTr.append(myTdName);
myTr.append(myTdEmail);

// Create the second row (data)
let myTr2 = document.createElement('tr');
let myTdNameData = document.createElement('td');
let myTdEmailData = document.createElement('td');

myTdNameData.innerHTML = 'John Doe'; // Example name
myTdEmailData.innerHTML = 'johndoe@example.com'; // Example email

myTable.append(myTr2);
myTr2.append(myTdNameData);
myTr2.append(myTdEmailData);

/// Create the third row (another data row)
let myTr3 = document.createElement('tr');
let myTdNameData3 = document.createElement('td');
let myTdEmailData3 = document.createElement('td');

myTdNameData3.innerHTML = 'Jane Smith'; // Another example name
myTdEmailData3.innerHTML = 'janesmith@example.com'; // Another example email

myTable.append(myTr3);
myTr3.append(myTdNameData3);
myTr3.append(myTdEmailData3);

// Create the fourth row (another data row)
let myTr4 = document.createElement('tr');
let myTdNameData4 = document.createElement('td');
let myTdEmailData4 = document.createElement('td');

myTdNameData4.innerHTML = 'Jacob Black'; // Another example name
myTdEmailData4.innerHTML = 'jacobblack@example.com'; // Another example email

myTable.append(myTr4);
myTr4.append(myTdNameData4);
myTr4.append(myTdEmailData4);

// Create the fifth row (another data row)
let myTr5 = document.createElement('tr');
let myTdNameData5 = document.createElement('td');
let myTdEmailData5 = document.createElement('td');

myTdNameData5.innerHTML = 'Jim Beam'; // Another example name
myTdEmailData5.innerHTML = 'jimbeam@example.com'; // Another example email

myTable.append(myTr5);
myTr5.append(myTdNameData5);
myTr5.append(myTdEmailData5);

// Create the sixth row (another data row)
let myTr6 = document.createElement('tr');
let myTdNameData6 = document.createElement('td');
let myTdEmailData6 = document.createElement('td');

myTdNameData6.innerHTML = 'Jose CanUSee'; // Another example name
myTdEmailData6.innerHTML = 'josecanusee@example.com'; // Another example email

myTable.append(myTr6);
myTr6.append(myTdNameData6);
myTr6.append(myTdEmailData6);

document.body.append(myTable);

myTable.style.border = '2px solid black';
myTable.style.width = '300px';
myTable.style.margin = '20px auto';
myTable.style.borderCollapse = 'collapse';
myTable.style.boxShadow = '3px 3px 10px rgba(0,0,0,0.2)';

// Keep the table's background color consistent
myTable.style.backgroundColor = '#5d8e42'; // Keep your original leaf green
myTable.style.color = 'black'; // Ensure text is readable

// Ensure the table keeps its background styling even when the body background changes
let tableRows = myTable.getElementsByTagName('tr'); // Use a different variable name

for (let i = 0; i < tableRows.length; i++) {
    if (i === 0) { 
        tableRows[i].style.backgroundColor = '#cc7c0b'; // Background color fall orange
        tableRows[i].style.color = 'white';
    } else if (i % 2 !== 0) {
        tableRows[i].style.backgroundColor = '#5d8e42'; // Keep alternate rows teal
        tableRows[i].style.color = 'white';
    } else {
        tableRows[i].style.backgroundColor = 'white'; // Keep other rows white
        tableRows[i].style.color = 'black';
    }
}

// Apply striped effect to rows (alternate background color for even rows)
let rows = myTable.getElementsByTagName('tr');
for (let i = 1; i < rows.length; i++) { // Start from 1 to skip the header row
    if (i % 2 !== 0) { // If the row index is odd (even rows in 1-based indexing)
        rows[i].style.backgroundColor = '#5d8e42'; // teal-colored background for striped effect
        rows[i].style.color = 'white'; // Set text color to white for the striped rows
    }
}

console.log(myTable);
//Question: While this is clearly a more round-about way of making a table, how can using JavaScript in this way
//          more beneficial than HTML?
//Answer: You would only have to have one page instead of having link multiple pages.

/*------------------------ Changing our body background on click ------------------------*/
console.log(`-------------------------- 
    Part 4: Changing our background on click`);
/**
 * Documentation: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
 *
 * Step 1: In our HTML, uncomment out the <button> element.
 * Step 2: Read through the documentation up through the first block of code.
 *         We're going to use rgb (ex: rgb(0,125,255) ) to change the color of our body's background when we click the button
 * Step 3: Create a variable called myButton that uses getElementById() to target the button in step 1.
 * Step 4: Use the 'addEventListener' method on myButton.
 *         addEventListener is a method takes in two arguments: an event listener type, and a function.
 * Step 5: For the first argument, add 'click'. For the second argument, add a function body... (ex: function (){})
 * Step 6: Inside of the function body, change the backgroundColor of our body element.
 *         Let's use rgb(0,125,255) to change the color, and Math.random() to change the values inside rgb().
 * Step 7: Click the button in your index.html and see the background change!
 *
 * ↓ YOUR CODE HERE ↓ */
document.body.style.transition = 'background-color 0.5s ease-in-out';
const myButton = document.getElementById('myButton')

myButton.style.display = 'block'; // Make the button a block-level element
myButton.style.margin = '20px auto'; // Center the button horizontally
myButton.style.padding = '10px 20px';
myButton.style.fontSize = '16px';
myButton.style.cursor = 'pointer';
myButton.style.backgroundColor = '#d7e608';
myButton.style.color = 'black';
myButton.style.border = '2px solid black';
myButton.style.borderRadius = '5px';
myButton.style.boxShadow = '3px 3px 10px rgba(0,0,0,0.2)';

myButton.addEventListener('click', () => {
    document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
});

for (let i = 1; i < rows.length; i++) { // Skip header row
    rows[i].addEventListener('click', function() {
        // Remove highlight from previous rows
        for (let row of rows) {
            row.style.backgroundColor = row.rowIndex % 2 !== 0 ? 'black' : 'white';
            row.style.color = row.rowIndex % 2 !== 0 ? 'white' : 'black';
        }
        // Highlight clicked row
        this.style.backgroundColor = '#ffcc00';
        this.style.color = 'black';
        console.log(`Selected: ${this.cells[0].innerText} - ${this.cells[1].innerText}`);
    });
}

//Question: What other event listeners are there?
//             Try them out by replacing 'click' in your function above!
//Answer: mouseup, mousedown, mouseover, mousedown, mousemove, scroll


// 1. Button to change div innerHTML
const toggleButton = document.createElement('button');
toggleButton.innerHTML = 'Toggle Hello/World';
document.body.append(toggleButton);

const myDiv = document.createElement('div');
myDiv.innerHTML = 'Hello'; // Initial text in the div
document.body.append(myDiv);

toggleButton.style.display = 'block';
toggleButton.style.margin = '20px auto';
toggleButton.style.padding = '10px 20px';
toggleButton.style.fontSize = '16px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.backgroundColor = '#d7e608';
toggleButton.style.color = 'black';
toggleButton.style.border = '2px solid black';
toggleButton.style.borderRadius = '5px';
toggleButton.style.boxShadow = '3px 3px 10px rgba(0,0,0,0.2)';

myDiv.style.textAlign = 'center';
myDiv.style.fontSize = '40px';
myDiv.style.marginTop = '20px';
myDiv.style.marginBottom = '20px';
myDiv.style.fontWeight = 'bold';
myDiv.style.textShadow = '3px 3px 3px #8e8a8a';

toggleButton.addEventListener('click', () => {
    // Toggle the text between 'Hello' and 'World'
    myDiv.innerHTML = myDiv.innerHTML === 'Hello' ? 'World' : 'Hello';
});

// 2. Image that disappears and reappears on hover
// 2. Styling for the image that disappears on hover and reappears on mouse out
const imageContainer = document.createElement('div');
imageContainer.style.textAlign = 'center';
document.body.append(imageContainer);

const myImage = document.createElement('img');
myImage.src = 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Replace with an actual image URL
myImage.alt = 'Example Image';
document.body.append(myImage);

myImage.style.width = '150px';
myImage.style.height = '150px';
myImage.style.transition = 'visibility 0.3s ease-in-out';
myImage.style.border = '2px solid black';
myImage.style.borderRadius = '10px'; // Optional, for rounded corners
myImage.style.boxShadow = '3px 3px 10px rgba(0,0,0,0.2)';
imageContainer.append(myImage);

myImage.addEventListener('mouseover', () => {
    myImage.style.visibility = 'hidden'; // Hide image on hover
});

myImage.addEventListener('mouseout', () => {
    myImage.style.visibility = 'visible'; // Show image when hover ends
});


myImage.addEventListener('mouseout', () => {
    myImage.style.visibility = 'visible'; // Show image when hover ends
});

// 3. Handle form submission and append new row to table
// 3. Styling for the for submission and new row in the table
myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    const nameValue = myNameInput.value; // Get name input value
    const emailValue = myEmailInput.value; // Get email input value

    // Create a new table row with name and email
    let newRow = document.createElement('tr');
    let newTdName = document.createElement('td');
    let newTdEmail = document.createElement('td');

    newTdName.innerHTML = nameValue;
    newTdEmail.innerHTML = emailValue;

    // Style the table cells
    newTdName.style.padding = '8px';
    newTdName.style.border = '1px solid #ddd';
    newTdEmail.style.padding = '8px';
    newTdEmail.style.border = '1px solid #ddd';

      // Append cells to the new row
      newRow.append(newTdName);
      newRow.append(newTdEmail);
  
      // Add the new row to the table
      myTable.append(newRow);
  
      // Set the background color of the new row (alternating color pattern)
      const rows = myTable.querySelectorAll('tr');  // Re-fetch the rows after appending
      const rowIndex = rows.length - 1;  // Get the index of the last row (newly added row)
  
      newRow.style.backgroundColor = rowIndex % 2 === 0 ? 'white' : 'rgb(93, 142, 66)'; //leaf green
      newRow.style.color = rowIndex % 2 === 0 ? 'black' : 'white';
  
      // Clear the input fields after appending the row
      myNameInput.value = '';
      myEmailInput.value = '';
});


console.log(`-----------Finished------------`);

/**
 * Extra Project Ideas:
 *
 * 1: Create a button that changes the innerHTML of a div back and forth from 'Hello' to 'World'
 * 2: Create an image that disappears when you hover over it, and reappears when you hover off.
 * 3: When you click your form button, get the input values of your name/email input,
 *    and append a new <tr> containing those values to your tBody element.
 *    Look into event.preventDefault(). Buttons inside of forms have a default setting to refresh the page.
 */
