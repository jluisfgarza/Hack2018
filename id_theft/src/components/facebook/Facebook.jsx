import React, { Component, Fragment } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  componentClicked = () => {
    console.log("clicked component");
  };

  responseFacebook = response => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <Fragment>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </Fragment>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="1674319169346674"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <Fragment> {fbContent} </Fragment>;
  }
}
