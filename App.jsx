import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>React Counter Application</h2>
      <h1>{count}</h1>

      <div className="btn-group">
        <button onClick={() => setCount(count + 1)}>
          Increment (+)
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrement (-)
        </button>
      </div>

      <button className="reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;