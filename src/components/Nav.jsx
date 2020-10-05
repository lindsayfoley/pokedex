import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Pokemon from "./Pokemon";
import PokemonDetailsPage from "./PokemonDetailsPage";

const Nav = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/pokemon">Find a Pokemon</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route exact path="/pokemon" component={Pokemon}></Route>
      <Route path="/pokemon/:id" component={PokemonDetailsPage}></Route>
    </Switch>
  </Router>
);

export default Nav;
