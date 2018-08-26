import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Styles
import HeroStyle from "../../../Assets/jss/HeroStyles";

// img
import hero from '../../../Assets/img/hero.png'; 

import { withStyles, Grid  } from "@material-ui/core";
import Facebook from "../../../Components/Facebook/Facebook";


class Hero extends Component {

  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
    imgArray: []
  };

  getData = val => {
  this.setState({
    isLoggedIn: val.isLoggedIn,
    userID: val.userID,
    name: val.name,
    email: val.email,
    picture: val.picture,
  });

  
 }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={[classes.root, "container"].join(' ')}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={7}>
              <h1 className={classes.h1}>
                Check if someone else is using your identity
              </h1>
              <h3 className={classes.h3}>
                We use face recognition and machine learning algorithms
                to find if someone is using your identity on the internet.
              </h3>
              <Facebook sendData={this.getData}/>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={hero} alt={"hero"} className={classes.img} />
            </Grid>
          </Grid>

          
          <img src={this.state.picture} alt={this.state.name} />
            <h2>Welcome {this.state.name}</h2>
            Email: {this.state.email}
            <button onClick={this.getFacebookData}>Click Me!</button>
          </div>
      </Fragment>
    );
  }
}
Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(HeroStyle)(Hero);
