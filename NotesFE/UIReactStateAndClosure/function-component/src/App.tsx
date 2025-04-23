// import { useState, ChangeEvent } from 'react';

// function App() {
//   const [text, setText] = useState<string>('');

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setText(event.target.value);
//     console.log(text); // 👈 Logs the value BEFORE the state updates
//   };

//   return (
//     <input
//       type="text"
//       onChange={handleChange}
//       value={text}
//       placeholder="Type something..."
//     />
//   );
// }

// export default App;





// import { useState, useEffect, ChangeEvent } from 'react';

// function Component() {
//   const [text, setText] = useState<string>('');

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setText(event.target.value);
//   };

//   useEffect(() => {
//     console.log(text);
//   }, [text]);

//   return (
//     <input
//       type="text"
//       onChange={handleChange}
//       value={text}
//       placeholder="Type something..."
//     />
//   );
// }

// export default Component;


// // Custom userState Hook (instead of useState)
// function userState<T>(initialValue: T): [T, (newValue: T) => void] {
//   let state = initialValue;

//   const setState = (newValue: T) => {
//     state = newValue;
//     console.log("State updated to:", state);
//   };

//   return [state, setState];
// }

// export function TextChanger() {
//   const [text, setText] = userState("old"); // Using userState instead of useState

//   const handleClick = () => {
//     setText("new");
//     console.log(text); // "old", because state updates are async
//   };

//   return (
//     <div>
//       <p>{text}</p>
//       <button onClick={handleClick}>Change Text</button>
//     </div>
//   );
// }




// function Component() {
//   const [text, setText] = useState("old");
//   const handleClick = () => {
//     console.log(text); // "old", because state updates are async
//   }
//   return <button onclick={handleClick}>{text}</button>
// }

// src/App.tsx

// BROKEN CODE

import { useState, useRef } from 'react';

export function Component() {
  const [text, setText] = useState("old");
  
  // Create a ref to store the previous state value
  const prevTextRef = useRef(text);

  const handleClick = () => {
    // Log the previous state (old) using the ref
    console.log(prevTextRef.current); // Always logs "old" before state is updated
    
    // Update the state (but before it's updated, we log the old value)
    setText("new");

    // Update the ref with the new state after the update
    prevTextRef.current = text;
  }

  return <button onClick={handleClick}>{text}</button>;
}

// Use the Component function
export default function App() {
  return (
    <div>
      <h1>My App</h1>
      <Component />
    </div>
  );
}

// FIXED CODE

// import { useState } from 'react';
// export function Component() {
//   const [text, setText] = useState("old");

//   const handleClick = () => {
//     const newText = "new";
//     setText(newText);
//     console.log(text); // "old", because state updates are async
//   }

//   return <button onClick={handleClick}>{text}</button>
// }

// // Use the Component function
// export default function App() {
//   return (
//     <div>
//       <h1>My App</h1>
//       <Component />
//     </div>
//   );
// }