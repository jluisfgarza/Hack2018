import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// Style
import appbarStyle from "../Assets/jss/AppbarStyle";
// Material UI
import { withStyles, Button, AppBar, Typography, Toolbar  } from "@material-ui/core";


class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.root}>

        <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
          
              <div className={classes.pages}>
                <Button color="primary" className={classes.button}>
                  Home
                </Button>

                <Button color="primary" className={classes.button}>
                  API
                </Button>

                <Button color="primary" className={classes.button}>
                  About
                </Button>

                <Button color="primary" className={classes.button}>
                  Donate
                </Button>

                <Button variant="extendedFab" className={classes.notifyMe}>
                Notify Me
                </Button>
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