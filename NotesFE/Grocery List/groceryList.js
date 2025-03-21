// The data
let shoppingList = [];

// Bookmarks to DOM nodes we'll need
const textbox = document.getElementById("new-textbox");
const list = document.querySelector("#list");

// Add button event handler
function handleAddClick(event) {
    // prevent the page from refreshing
    event.preventDefault();

    // Save the new item to the data
    const newItem = {
        id: generateUniqueID(),
        text: textbox.value.trim(), // Trim whitespace
        complete: false 
    };

    if (!newItem.text) return; // Prevent adding empty items

    shoppingList.push(newItem);

    // Create a new list item
    const newLi = document.createElement("li");
    newLi.className = "my-3 d-flex align-items-center";
    newLi.id = "item-" + newItem.id;

    // Create the complete button (checkbox)
    const completeButton = document.createElement("button");
    completeButton.className = "complete-button btn border-2 p-0 d-flex align-items-center justify-content-center";
    completeButton.style.width = "30px";  // Width of the box
    completeButton.style.height = "30px"; // Height of the box
    completeButton.style.border = "2px solid black"; // Black border
    completeButton.style.borderRadius = "4px"; // Rounded corners
    completeButton.style.backgroundColor = "white"; // Background color for unchecked box
    completeButton.setAttribute("aria-label", "checkbox");

    // Add event listener for complete button
    completeButton.addEventListener("click", () => {
        newItem.complete = !newItem.complete;
        completeButton.style.backgroundColor = newItem.complete ? "green" : "white"; // Green when checked
        completeButton.innerHTML = newItem.complete ? "✔️" : ""; // Checkmark when checked
    });

    // Create the text span
    const textSpan = document.createElement("span");
    textSpan.className = "mx-2";
    textSpan.textContent = newItem.text;

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button btn btn-danger";
    deleteButton.textContent = "X";

    // Add delete event listener
    deleteButton.addEventListener("click", () => {
        const deleteIndex = shoppingList.findIndex(item => item.id === newItem.id);
        if (deleteIndex !== -1) shoppingList.splice(deleteIndex, 1);
        newLi.remove();
    });

    // Append elements to the list item
    newLi.appendChild(completeButton);  // Add the button first to the left
    newLi.appendChild(textSpan);  // Then the text
    newLi.appendChild(deleteButton);  // Then the delete button

    // Move it into the page
    list.appendChild(newLi);

    // Clear the textbox
    textbox.value = "";
}

// Clear Completed button event handler
function handleClearClick() {
    // Remove completed items from both the UI and data
    shoppingList = shoppingList.filter(item => {
        if (item.complete) {
            const element = document.getElementById("item-" + item.id);
            if (element) element.remove();
            return false; // Remove from array
        }
        return true;
    });
}

function handleMarkClick() {

    
    shoppingList.forEach(item => {
        // Update the data
        item.complete = true;

        // Find the correct button in the DOM
        const listItem = document.getElementById(`item-${item.id}`);
        if (listItem) {
            const completeButton = listItem.querySelector(".complete-button");
            if (completeButton) {
                completeButton.innerHTML = "✔️";  // Add checkmark
                completeButton.style.backgroundColor = "green";  // Change background color
            }
        }
    });
}



// Little helper function for generating IDs
let nextId = 10;
function generateUniqueID() {
    return nextId++;
}
