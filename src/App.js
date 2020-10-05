import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
      </div>
    </Router>
  );
}

export default App;
