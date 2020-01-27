import React, { useState } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Tone from "./components/Tone";
import Muse from "./components/Muse";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Example5 from "./components/Example5";
import Prototype from "./components/Prototype";
import * as ROUTES from "./constants/routes";
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
          <NavLink to={ROUTES.EXAMPLE_1} activeClassName="active">
            <h1>1</h1>
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_2} activeClassName="active">
            <h1>2</h1>
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_3} activeClassName="active">
            <h1>3</h1>
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_4} activeClassName="active">
            <h1>4</h1>
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_5} activeClassName="active">
            <h1>5</h1>
          </NavLink>
        </div>
        <Switch>
          <Route path="/muse" component={Muse} />
          <Route path="/prototype" component={Prototype} />
          <Route path={ROUTES.EXAMPLE_1} component={Example1} />
          <Route path={ROUTES.EXAMPLE_2} component={Example2} />
          <Route path={ROUTES.EXAMPLE_3} component={Example3} />
          <Route path={ROUTES.EXAMPLE_4} component={Example4} />
          <Route path={ROUTES.EXAMPLE_5} component={Example5} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
