import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              <img
                src={logo}
                width="30"
                height="30"
                alt="CodingTheSmartWay.com"
              />
            </Link>
            <Link to="/" className="navbar-brand">
              MERN-Stack Todo App
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
        </div>
      </Router>
    );
  }
}

export default App;
