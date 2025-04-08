// Imperative code
// function renderReviewCard(review: Review) {
//     const div = document.createElement("div");
//     div.className = "bg-light mb-3 p-4"
//     div.innerHTML = `
//         <h5>${review.author}</h5>
//         <p>${review.text}</p>
//         <button id="delete-btn" class="btn btn-danger">
//             Delete
//         </button>
//     `
//     div.querySelector("#delete-btn")
//         .addEventListener("click", () => {
//             div.remove()
//         })
//     return div

// }



// Declarative code
// function ReviewCard({ review }: { review: Review }) {
//     return (
//         <div className="bg-light mb-3 p-4">
//             <h5>{review.author}</h5>
//             <p>{review.text}</p>
//             <button 
//                 className="btn btn-danger"
//                 onClick={() => alert("Deleting!")}
//             >
//                 Delete
//             </button>
//         </div>
//     )
// }


// JS in JSX                                                // Template literal
// return <h4>{ price * 2 }</h4>             ===                 return `<h4>${ price * 2 }</h4>`
// return <img src={ path } />               ===                 return `<img src="${ path }" />`

// Building a string of HTML with template literals
container.innerHTML = `
    <div className="bg-light mb-3 p-4">
        <h5>{review.author}</h5>
        <p>{review.text}</p>
        <button 
        className="btn btn-danger"
        onClick="handleDelete()"
        >
        Delete
        </button>
    </div>
`
container.querySelector("#delete-button")
    .addEventListener("click", () => alert("Deleting!"))

// Building a string of HTML with JSX
return (
    <div className="bg-light mb-3 p-4">
        <h5>{review.author}</h5>
        <p>{review.text}</p>
        <button 
            className="btn btn-danger"
            onClick={() => alert("Deleting!")}
        >
            Delete
        </button>
    </div>
)

// Building a string of HTML with JSX: writing the function separately
const handleDelete = () => alert("Deleting!")
return (
    <div className="bg-light mb-3 p-4">
        <h5>{review.author}</h5>
        <p>{review.text}</p>
        <button 
            className="btn btn-danger"
            onClick={handleDelete}
        >
            Delete
        </button>
    </div>
)

// JSX 

// The class attribut is called classanme in JSX
// <img className="border" />

// Most attributes are in camelCase in JSX
// <img tabIndex="0" />

// JS goes inside curly braces in JSX
// return <h4>{ price * 2 }</h4>

// Leavev off the quotation marks if you're setting it to JS
// return <img src={ path } />

// Set it to the function itself, not a string
// <button onAbort={handleClick} />




// HTML & Template Literals

// The class attribute is called class 
// <img class="border"></img>

// Attributes are all lowercase
// <img tabindex="0"></img>

// JS goes inside curly brackets with a $ 
// return <h4>${ price * 2 }</h4>

// You always have to have the quotation marks
// return `<img src="${ path }" />`

// Set it to call to the function
// <button onclick="handleClick()" />

