import React, { Component, Fragment } from "react";
import FacebookLogin from "react-facebook-login";

// import facebookStyle from "../../Assets/jss/FacebookStyle";

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
      { fields: "email,gender,hometown,id,photos{link}" },
      function(response) {
        // this.setState({
        //   imgArray: response.photos.data
        // });
        console.log(
          response.photos.data.map(function(img) {
            return img.link;
          })
        );
      }
    );
  };

  render() {

    // const { classes } = this.props;
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
