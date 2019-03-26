import React, { Component } from "react";

import { Link } from "react-router-dom";

import AccountsUIWrapper from "./AccountsUIWrapper.jsx";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.name = "";
    this.password = "";
    this.password2 = "";
    this.avatar = "";
    this.role = "";
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();

    // check password is valid
    if (this.password === this.password2) {
      // set the user avatar
      let avatarURL = "https://robohash.org/" + "username"

      // our info all in one object
      let userData = {
        username: this.name,
        email: this.email,
        password: this.password,
        profile: {
          avatar: this.avatar,
          role: this.role
        }
     }


    Accounts.createUser(userData, function(error) {
        if (Meteor.user()) {
           console.log(Meteor.userId());
        } else {
           console.log("err: " + error.reason);
        }
     });

    } else {
      console.log("password doesn't match");
    }

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
                <h5 className="card-title">Register</h5>

                <p className="grey-text text-darken-1">
                  Already have an account? <Link to="/login">Log in</Link>
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
                    <label htmlFor="email">Email</label>

                    <input
                      id="email"
                      type="email"
                      ref={input => (this.email = input)}
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

                  <div className="form-label-group">
                    <label htmlFor="password2">Confirm Password</label>

                    <input
                      id="password2"
                      type="password"
                      ref={input => (this.password2 = input)}
                    />
                  </div>
                  <div className="form-label-group">
                  <label htmlFor="optionsselect">Choose Role</label>
                  <select 
                    className="form-control" 
                    id="optionsselect"
                    ref={input => (this.selecteditem = input)}>
                    <option>Barbarian</option>
                    <option>Bard</option>
                    <option>Cleric</option>
                    <option>Druid</option>
                    <option>Dungeon Master</option>
                    <option>Fighter</option>
                    <option>Monk</option>
                    <option>Paladin</option>
                    <option>Ranger</option>
                    <option>Rogue</option>
                    <option>Sorceror</option>
                    <option>Warlock</option>
                    <option>Wizard</option>
                  </select>
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
                    Sign up
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