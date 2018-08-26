import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  CircularProgress
} from "@material-ui/core";
// Styles
import HeroStyle from "../../../Assets/jss/HeroStyles";

// img
import hero from "../../../Assets/img/hero.png";

import { withStyles, Grid } from "@material-ui/core";
import Facebook from "../../../Components/Facebook/Facebook";

class Hero extends Component {
  state = {
    isLoggedIn: true,
    userID: "",
    name: "",
    email: "",
    picture: "",
    api2: {},
    loadingAPI2: true
  };

  getData = val => {
    this.setState({
      isLoggedIn: val.isLoggedIn,
      userID: val.userID,
      name: val.name,
      email: val.email,
      picture: val.picture
    });
  };

  getArray = val => {
    console.log(val);

    Object.keys(this.state.val).map(item => 
        for int i in item.pages => (
          console.log(item.pages[i]);
        
          
        
     
    ));

    this.setState({
      api2: val,
      loadingAPI2: false
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
              <Facebook sendData={this.getData} sendArray={this.getArray} />
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={hero} alt={"hero"} className={classes.img} />
            </Grid>
          </Grid>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
        <h1>Hola</h1>

        {Object.keys(this.state.api2).map(item => (
          <div>
            {for i in item.pages => {
              

            }}
          </div>
        ))}


        {this.state.loadingAPI2 ? (
          <CircularProgress size={50} />
        ) : (
          <Fragment>
            <ListSubheader component="div"> Completed </ListSubheader>
            <List dense={true} />
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
