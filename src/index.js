import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <MyComponent />
      <BackButton />
    </div>
  );
}

function MyComponent() {
    return <h1>Hello, this is a function component body.</h1>;
}

function BackButton() {
    return <button>Back to home</button>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);