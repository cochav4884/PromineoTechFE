//Finding Elements in a DOM 

// let button = document.getElementById("my-button");
// console.log(button);

// let buttonsByTag = document.getElementsByTagName("button"); 
// console.log(buttonsByTag);

// let buttonsByClassName = document.getElementsByClassName("my-class");
// console.log(buttonsByClassName);

// let buttonsByTag = document.getElementsByTagName("button");
// console.log(buttonsByTag);

// let buttonsByClassName = document.getElementsByClassName("my-class");
// console.log(buttonsByClassName);

//Finding Elements by their CSS Selector

// let buttonsByCSSSelector = document.querySelectorAll("button.my-class");
// console.log(buttonsByCSSSelector);

// let buttonsByCSSSelector = document.querySelectorAll(".my-class");
// console.log(buttonsByCSSSelector);

//Interacting with the DOM

// document.getElementById("content").innerHTML = "Goodbye.";

let button = document.getElementById("btn");
let content = document.getElementById("content");

button.addEventListener("click", () => {
    if (content.innerHTML === "Goodbye.") {
        content.innerHTML = "Hello.";
    } else {
        content.innerHTML = "Goodbye."
    }
});

// Removing Elements from the DOM

document.getElementById("remove").addEventListener("click", () => {
    let idToRemove = document.getElementById("remove-id").value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById("remove-id").value;
});

let id = 0;

// Adding Elements to the DOM
document.getElementById("add").addEventListener("click", () => {
    let parent = document.getElementById("paragraphs");
    let newElement = document.createElement("p");
    newElement.innerHTML = document.getElementById("new-text").value;
    newElement.setAttribute("id", id++);
    parent.appendChild(newElement);
});
