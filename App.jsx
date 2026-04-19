import React from "react";
import "./App.css";

// Student Component
function Student({ name, roll, branch }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Roll No: {roll}</p>
      <p>Branch: {branch}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Student Details</h1>

      <Student name="Tanuja Singh" roll="1230" branch="CSE" />
      <Student name=" swastika singh " roll="1240" branch="IT" />
      <Student name=" Tanishka Gupta" roll="1250" branch="ECE" />
    </div>
  );
}

export default App;