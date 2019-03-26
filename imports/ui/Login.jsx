import React, { Component } from "react";

import { Link } from "react-router-dom";

import AccountsUIWrapper from "./AccountsUIWrapper.jsx";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.name = "";
    this.password = "";
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    Meteor.loginWithPassword(this.name.value, this.password.value, function(error) {
      
      if (error) {
        console.log(error);
      } else {
        console.log(Meteor.user());
      }
    });

  }

  render() {
    return (
       <div className="container">
        <div className="row">
          <div
            className="col-lg-10 col-xl-9 mx-auto"
            style={{ padding: "100px" }}
          >
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex col-6" />
              <div className="card-body">
                <h5 className="card-title">Login below</h5>
                <p className="grey-text text-darken-1">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
                <form
                  className="form-signin"
                  noValidate
                  onSubmit={this.onSubmit}
                >
                  <div className="form-label-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      ref={input => (this.name = input)}
                    />
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="password">Password</label>

                    <input
                      id="password"
                      type="password"
                      ref={input => (this.password = input)}
                    />
                  </div>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}