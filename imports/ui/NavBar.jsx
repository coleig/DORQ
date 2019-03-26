import React, { Component } from "react";
import { Link } from "react-router-dom";
import Register from "./Register.jsx";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            DORQ
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  Home <span className="nav-link sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
            </ul>
            {Meteor.user() ? (
              <Link to="/" onClick={Meteor.logout()}>
                Logout
              </Link>
            ) : (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}