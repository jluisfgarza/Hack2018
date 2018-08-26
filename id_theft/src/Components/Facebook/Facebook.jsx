import React, { Component, Fragment } from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
    imgArray: []
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

  getFacebookData = () => {
    window.FB.api(
      "/me",
      "GET",
      { fields: "email,gender,id,photos{images}" },
      function(response) {
        if (response.data) {
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = true;

          xhr.addEventListener("readystatechange", function() {
            if (this.readyState === this.DONE) {
              console.log(this.responseText);
            }
          });

          xhr.open(
            "GET",
            "https://api.infringement.report/2.0/list/46542/query?use_ignore_lists=false&q=*"
          );
          xhr.setRequestHeader("x-api-key", "d7d9c0fada0bf4294da373362b4c1f4a");

          xhr.send(
            response.photos.data.map(function(img) {
              return img.images[0].source;
            })
          );
        }
        // console.log(
        //   response.photos.data.map(function(img) {
        //     return img.images[0].source;
        //   })
        // );
      }
    );
  };

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <Fragment>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
          <button onClick={this.getFacebookData}>Click Me!</button>
        </Fragment>
      );
    } else {
      fbContent = (
        <Fragment>
          <FacebookLogin
            appId="1674319169346674"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        </Fragment>
      );
    }

    return <Fragment> {fbContent} </Fragment>;
  }
}
