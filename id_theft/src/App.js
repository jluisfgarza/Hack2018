import React, { Component } from "react";
import { provider, auth } from "./firebase/client";
import "./App.css";
import { func } from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      token: "",

    };
  }

  componentWillMount() {
    auth().onAuthStateChanged(function(user, token) {
      if (user && token) {
        this.setState({
          user: this.user,
          token: this.token
        });
      }
    });
  }

  login = () => {
    auth()
      .signInWithPopup(provider)
      .then(({ user, token }) => {
        this.setState({
          user: this.user,
          token: this.token
        });
      }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  logout = () => {
    auth()
      .signOut()
      .then(() => {
        this.setState({
          user: null,
          token: ""
        });
      });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <p> {user ? `Hi, ${user.displayName}!` : "Hi!"} </p>{" "}
        <button onClick={this.login}>Login with Facebook </button>
        <button onClick={this.logout}>Logout </button>{" "}
      </div>
    );
  }
}

export default App;
