import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
// Styles
import HeroStyle from "../../../Assets/jss/HeroStyles";

// img
import hero from "../../../Assets/img/hero.png";

import { withStyles, Grid } from "@material-ui/core";
import Facebook from "../../../Components/Facebook/Facebook";

class Hero extends Component {
  state = {
    hide: true,
    userID: "",
    name: "",
    email: "",
    picture: "",
    api2: [],
    loadingAPI2: true
  };

  show = () => {
    this.setState({
      hide: false
    });
  };

  recData = val => {
    this.setState({
      recognitionData: val
    });
  };

  getData = val => {
    this.setState({
      userID: val.userID,
      name: val.name,
      email: val.email,
      picture: val.picture,
      pages: []
    });
  };

  getArray = val => {
    console.log(val);
    var temparry = [];
    var keys = Object.keys(val);
    for (let index = 0; index < keys.length; index++) {
      const element = val[keys[index]];
      var pages = element.pages;
      var indKey = Object.keys(pages);
      for (let indexPages = 0; indexPages < indKey.length; indexPages++) {
        temparry.push(pages[indKey[indexPages]].page);
      }
    }

    this.setState({
      api2: val,
      loadingAPI2: false,
      pages: temparry
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={[classes.root, "container"].join(" ")}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={7}>
              <h1 className={classes.h1}>
                Check if someone else is using your identity
              </h1>
              <h3 className={classes.h3}>
                We use face recognition and reverse image search to find if
                someone is using your identity on the internet.
              </h3>
              <Facebook
                sendData={this.getData}
                sendArray={this.getArray}
                showSec={this.show}
                getRec={this.recData}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={hero} alt={"hero"} className={classes.img} />
            </Grid>
          </Grid>
        </div>

        {this.state.hide ? (
          <Fragment />
        ) : (
          <Fragment>
            {this.state.loadingAPI2 ? (
              <CircularProgress className={classes.centerProgress} size={50} />
            ) : (
              <Fragment>
                <div>
                  <div className={[classes.welcome, "center"].join(" ")}>
                    <img
                      src={this.state.picture}
                      alt={this.state.name}
                      className={classes.picture}
                    />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                  </div>

                  <div className={"container"}>
                    <br />
                    <Grid container spacing={24}>
                      <Grid item xs={12}>
                        <h3 className={classes.centerProgress}>Recognition</h3>
                      </Grid>
                      <Grid item xs={4}>
                        <img src={this.state.picture} height={300} />
                      </Grid>
                      <Grid item xs={8}>
                        <div className={classes.codeStyle}>
                          <pre>
                            {JSON.stringify(
                              this.state.recognitionData,
                              null,
                              2
                            )}
                          </pre>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                      <Grid item xs={12}>
                        <h3 className={classes.centerProgress}>Callback</h3>
                        <List className={classes.centerList}>
                          {this.state.pages.map(value => (
                            <a
                              href={value}
                              target="_blank"
                              style={{ "text-decoration": "none" }}
                            >
                              <ListItem
                                key={value}
                                role={undefined}
                                dense
                                className={classes.listItem}
                              >
                                <ListItemText primary={value} />
                              </ListItem>
                            </a>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  </div>
                  <br />
                  <h3 className={classes.centerProgress}>Data</h3>
                  <div className={classes.codeStyle}>
                    <pre>{JSON.stringify(this.state.api2, null, 2)}</pre>
                  </div>
                </div>
                <br />
                <br />
              </Fragment>
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(HeroStyle)(Hero);
