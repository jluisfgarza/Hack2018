import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// Style
import appbarStyle from "../Assets/jss/AppbarStyle";
// Material UI
import { withStyles, AppBar, Toolbar  } from "@material-ui/core";

import icons from "../Assets/img/icons.png";

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.root}>

        <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
          
              <div className={classes.pages}>
                <ul className={classes.ul}>
                  <a href="/">
                    <li className={classes.a}>Home</li>
                  </a>
                  <a href="/api">
                    <li className={classes.a}>API</li>
                  </a>
                  <a href="/about">
                    <li className={classes.a}>About</li>
                  </a>
                  <a href="/donate">
                    <li className={classes.a}>Donate<img src={icons} alt="icons" className={classes.img} /></li>
                  </a>
                  <a href="/notify-me">
                    <li className={[classes.a, classes.notifyMe].join(' ')}>
                      <span className={classes.inside}>Notify Me</span>
                    </li>
                  </a>
                </ul>
              </div>
              
            </Toolbar>
          </AppBar>
            
        </div>
      </Fragment>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appbarStyle)(Navbar);