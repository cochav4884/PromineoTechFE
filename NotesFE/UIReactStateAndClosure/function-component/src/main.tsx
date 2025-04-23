// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import TextChanger from './App'; // Importing the default TextChanger

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TextChanger /> {/* Rendering the TextChanger component */}
  </React.StrictMode>,
);
