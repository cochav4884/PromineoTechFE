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
`;
container
  .querySelector("#delete-button")
  .addEventListener("click", () => alert("Deleting!"));

// Building a string of HTML with JSX
return (
  <div className="bg-light mb-3 p-4">
    <h5>{review.author}</h5>
    <p>{review.text}</p>
    <button className="btn btn-danger" onClick={() => alert("Deleting!")}>
      Delete
    </button>
  </div>
);

// Building a string of HTML with JSX: writing the function separately
const handleDelete = () => alert("Deleting!");
return (
  <div className="bg-light mb-3 p-4">
    <h5>{review.author}</h5>
    <p>{review.text}</p>
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  </div>
);

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

// Using Props: information flows down like a waterfall from component to component

function App() {
  return (
    <div>
      <h3>Welcome!</h3>
      <SearchBar size={3} />
    </div>
  );
}

function SearchBar({ size }) {
  return (
    <form className={"fs-" + size}>
      <input type="text" />
      <SpecialButton text="Login" />
    </form>
  );
}

function SpecialButton({ text }) {
  return <button>{text}</button>;
}

// notes for React Philosophy

const tags = ["Urgent", "Home", "Work"];

const mappedTags = [<li>Urgent</li>, <li>Home</li>, <li>Work</li>];

export default function App() {
  return (
    <ul>
      <li>Urgent</li>,<li>Home</li>,<li>Work</li>
    </ul>
  );
}


const messageList = [
    {
        id: 0,
        text: "How are you?"
    },
    {
        id: 1,
        text: "What a great day!"
    },
    {
        id: 2,
        text: "Be there in 5"
    },
]

const mappedArray = [
    <MessageCard message={{
        id: 0,
        text: "How are you?"
    }}></MessageCard>,
    <MessageCard message={{
        id: 1,
        text: "What a great day!"
    }}></MessageCard>,
    <MessageCard message={{
        id: 2,
        text: "Be there in 5."
    }}></MessageCard>,
]

const mappedArray2 = [
    <div>
         How are you?
    </div>,
    <div>
        What a great day!
    </div>,
    <div>
       Be there in 5.
    </div>
]

export default function App() {
    return (
        <div>
            { messages.map( message => <Message messge={message} />)}
        </div>
    )
}

function Message({ message }) {
    return (
        <div>
            {message.text}
        </div>
    )
}

{ messages.map(message => <Message message={message}/>) }

// blue messages: An array of messages to display
// lite blue message(ist and 3rd): A parameter to the map callback function
// - this parameter will have e3ach message in it, one by one
// green message: A component that knows how to display one message
// lite blue message: A prop on the Message component

/**
 * To make it less complicated...try this:
 */

{ messageList.map(m => <Message message={m}></Message>) }