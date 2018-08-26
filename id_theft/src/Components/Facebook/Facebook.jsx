import React, { Component, Fragment } from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

export default class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      recognitionData: []
    };
  }

  funShow = () => {
    this.props.showSec();
  };

  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true
    });

    this.props.sendData({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });

    // this.getFacebookData();
    this.incandescentRequest();
  };

  getFacebookData = () => {
    window.FB.api(
      "/me",
      "GET",
      { fields: "email,gender,id,photos.limit(1){images}" },
      function(response) {
        if (response) {
          // console.log(
          //   response.photos.data.map(function(img) {
          //     return img.images[0].source;
          //   })
          // );
          axios
            .post(
              `https://api.infringement.report/2.0/search`,
              {
                // images: response.photos.data.map(function(img) {
                //   return img.images[0].source;
                // }),
                images: [
                  "http://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg"
                ],
                list_label: response.id
              },
              { headers: { "x-api-key": "bef0c55ff68e3947df8bcc8859459754" } }
            )
            .then(res => {
              console.log(res);
              setTimeout(10, () => {
                console.log("Hola");
                axios
                  .get(
                    `https://api.infringement.report/2.0/list/${
                      res.data.list_id
                    }/query?use_ignore_lists=false&q=*`
                  )
                  .then(function(response) {
                    // handle success
                    console.log(response);
                  })
                  .catch(function(error) {
                    // handle error
                    console.log(error);
                  });
              });
            });
        }
      }
    );
  };

  incandescentRequest = () => {
    var userPhoto = "";
    var self = this;
    window.FB.api(
      "/me",
      "GET",
      { fields: "email,gender,id,photos.limit(1){images}" },
      function(response) {
        if (response) {
          switch (response.id) {
            // Miguel
            case "10212917590279296":
              userPhoto =
                "https://pbs.twimg.com/profile_images/1033740500589637632/WSueeLQU_400x400.jpg";
              break;
            // Jl
            case "10212132377681114":
              userPhoto =
                "https://pbs.twimg.com/profile_images/788586702638051328/5MZnuuwH_400x400.jpg";
              break;
            // Eddy
            case "1674319169346674":
              userPhoto =
                "https://pbs.twimg.com/profile_images/1033744844907139072/ITj2Gw8i_400x400.jpg";
              break;

            default:
              break;
          }
          // console.log(
          //   response.photos.data.map(function(img) {
          //     return img.images[0].source;
          //   })
          // );
          axios
            .post(
              `https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Categories,Description,Color&details=&language=en`,
              {
                url: userPhoto
              },
              {
                headers: {
                  "Ocp-Apim-Subscription-Key":
                    "2c072f6c5b06455c871fdd6e2f00cad2",
                  "Content-Type": "application/json"
                }
              }
            )
            .then(res => {
              console.log(res.data);
              self.props.getRec(res.data);
              self.props.setImg(userPhoto);
            });

          var incan_client = require("node-incandescent-client").client;
          var client = new incan_client(
            "7485",
            "f6a483e0906853def5d1945b1cd02b35"
          );
          // var imagenes = response.photos.data.map(function(img) {
          //   return img.images[0].source;
          // });
          // for (let index = 0; index < imagenes.length; index++) {
          //   console.log(imagenes[index]);

          client.addImageUrl(
            userPhoto
            // imagenes[index]
          );
          // }
          client.assemble();

          client.sendRequest(function(projectId) {
            console.log("ProjectID: " + projectId);

            client.getResults(projectId, function(data) {
              self.props.sendArray(data);
            });
          });
        }
      }
    );
  };

  render() {
    // const { classes } = this.props;
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = <Fragment />;
    } else {
      fbContent = (
        <Fragment>
          <FacebookLogin
            appId="1674319169346674"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.funShow}
            callback={this.responseFacebook}
          />
        </Fragment>
      );
    }

    return <Fragment> {fbContent} </Fragment>;
  }
}
