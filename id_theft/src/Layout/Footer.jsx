import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// Style
import footerStyle from "../Assets/jss/FooterStyle";
// Material UI
import { withStyles } from "@material-ui/core";

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.root}>
            
        </div>
      </Fragment>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
