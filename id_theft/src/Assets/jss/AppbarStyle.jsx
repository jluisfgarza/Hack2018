// Appbar Styles
import colors from './Colors';

const appbarStyles = theme => ({
  root: {
    marginTop: '30px',
  },
  title:{
  },
  img:{
    fill: '#ff0000',
    color: colors.white,
  },
  appbar:{
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'block',
  },
  toolbar:{
    display: 'block',
  },
  pages:{
    marginRight: '5%',
    display: "inline-block",
    float: "right",
    [theme.breakpoints.down("sm")]: {
      float: "none",
      textAlign: 'center',
      display: 'block',
      margin: '0 auto',
    },
  },
  button: {
    color: colors.white,
    marginRight: '50px',
    fontSize: '20px',
    [theme.breakpoints.down("sm")]: {
      marginRight: '5px',
      fontSize: '14px',
    },
  },
  notifyMe: {
    color: colors.primary,
    backgroundColor: colors.white,
    fontSize: '18px',
    [theme.breakpoints.down("sm")]: {
      fontSize: '14px',
    },
    [theme.breakpoints.only("xs")]: {
      margin: '10px 0',
    },
  }
});

export default appbarStyles;
