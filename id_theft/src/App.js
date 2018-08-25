import React, { Component } from "react";
import { provider, auth } from "./firebase/client";
import { func } from "prop-types";

// Layout
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';

// Components
import Landing from './Components/Landing/Landing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      token: ""
    };
  }

  componentWillMount() {
    auth().onAuthStateChanged(function(user, token) {
      if (user && token) {
        this.setState({
          user: this.user,
          token: this.token
        });
        console.log(this.state.user);
        console.log(this.state.token);
      }
    });
  }

  login = () => {
    auth()
      .signInWithPopup(provider)
      .then(function(result) {
        this.setState({
          user: result.user,
          token: result.credential.accessToken
        });
        console.log(this.state.user);
        console.log(this.state.token);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(
          errorCode + "/n" + errorMessage + "/n" + email + "/n" + credential
        );
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
        console.log(this.state.user);
        console.log(this.state.token);
      });
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        <Navbar />
        <Landing />
        <Footer />
        <p> {user ? `Hi, ${user.displayName}!` : "Hi!"} </p>{" "}
        <button onClick={this.login}>Login with Facebook </button>
        <button onClick={this.logout}>Logout </button>{" "}
      </div>
    );
  }
}

export default App;
