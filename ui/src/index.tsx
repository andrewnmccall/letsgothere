import React from 'react';
import {createRoot} from 'react-dom/client';

function MyButton({title}: {title: string}) {
  return <button>{title}</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
    </div>
  );
}

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app')!);
root.render(<MyApp></MyApp>);
