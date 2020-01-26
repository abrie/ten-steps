import React, { useState } from "react";
import * as Tone from "tone";
import Prototype from "./components/Prototype";
import "./App.css";

function App() {
  const [authorized, setAuthorized] = useState(false);

  const initialize = () => {
    Tone.start().then(() => setAuthorized(true));
  };

  if (!authorized) {
    return <button onClick={initialize}>click to permit AudioContext</button>;
  }

  return (
    <div className="App">
      <Prototype />
    </div>
  );
}

export default App;
