import React, { useState } from "react";
import Tone from "./components/Tone";
import Muse from "./components/Muse";
import Prototype from "./components/Prototype";
import Transport from "./components/Transport";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import "./App.css";

function App(props) {
  const [authorized, setAuthorized] = useState(false);

  const initialize = () => {
    Tone.start().then(() => setAuthorized(true));
  };

  if (!authorized) {
    return <button onClick={initialize}>click to permit AudioContext</button>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <NavLink to="/muse" activeClassName="active">
            example2
          </NavLink>
          <NavLink to="/prototype" activeClassName="active">
            example1
          </NavLink>
        </div>
        <Switch>
          <Route path="/muse" component={Muse} />
          <Route path="/prototype" component={Prototype} />
        </Switch>
      </BrowserRouter>
      <Transport />
    </div>
  );
}

export default App;
