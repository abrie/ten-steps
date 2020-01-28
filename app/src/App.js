import React, { useState } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Tone from "./components/Tone";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Example5 from "./components/Example5";
import Example6 from "./components/Example6";
import Example7 from "./components/Example7";
import Example8 from "./components/Example8";
import Example9 from "./components/Example9";
import Example10 from "./components/Example10";
import * as ROUTES from "./constants/routes";
import "./App.css";

function App(props) {
  const [authorized, setAuthorized] = useState(
    Tone.context.state === "suspended"
  );

  const initialize = () => {
    Tone.start().then(() => setAuthorized(true));
  };

  if (!authorized) {
    return <button onClick={initialize}>click to permit AudioContext</button>;
  }

  return (
    <main className="app">
      <h1>Ten Steps to an Algorithmic Song</h1>
      <hr />
      <BrowserRouter>
        <nav className="examplesNav">
          <NavLink to={ROUTES.EXAMPLE_1} activeClassName="active">
            1
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_2} activeClassName="active">
            2
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_3} activeClassName="active">
            3
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_4} activeClassName="active">
            4
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_5} activeClassName="active">
            5
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_6} activeClassName="active">
            6
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_7} activeClassName="active">
            7
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_8} activeClassName="active">
            8
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_9} activeClassName="active">
            9
          </NavLink>
          <NavLink to={ROUTES.EXAMPLE_10} activeClassName="active">
            10
          </NavLink>
        </nav>
        <hr />
        <section className="activeExample">
          <Switch>
            <Route path={ROUTES.EXAMPLE_1} component={Example1} />
            <Route path={ROUTES.EXAMPLE_2} component={Example2} />
            <Route path={ROUTES.EXAMPLE_3} component={Example3} />
            <Route path={ROUTES.EXAMPLE_4} component={Example4} />
            <Route path={ROUTES.EXAMPLE_5} component={Example5} />
            <Route path={ROUTES.EXAMPLE_6} component={Example6} />
            <Route path={ROUTES.EXAMPLE_7} component={Example7} />
            <Route path={ROUTES.EXAMPLE_8} component={Example8} />
            <Route path={ROUTES.EXAMPLE_9} component={Example9} />
            <Route path={ROUTES.EXAMPLE_10} component={Example10} />
          </Switch>
        </section>
      </BrowserRouter>
    </main>
  );
}

export default App;
