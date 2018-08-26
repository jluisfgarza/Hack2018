// Appbar Styles
import colors from './Colors';

const appbarStyles = theme => ({
  root: {
    marginTop: '30px',
  },
  title:{},
  img:{
    height: '14px',
    marginLeft: '5px',
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
  
  a: {
    textDecoration: "none",
    color: colors.white,
    marginRight: '50px',
    display: "inline-block",
    margin: 0,
    padding: '10px',
    fontSize: '20px',
    [theme.breakpoints.down("md")]: {
      marginRight: '18px',
    },
    [theme.breakpoints.only("xs")]: {
      marginRight: '10px',
    },
  },
  notifyMe: {
    color: colors.primary,
    backgroundColor: colors.white,
    fontSize: '18px',
    margin: '0 10px',
    borderRadius: '25px',
    [theme.breakpoints.only("xs")]: {
      margin: '10px 0',
    },
    [theme.breakpoints.down("md")]: {
      marginRight: '18px',
    },
  },
  inside:{
    margin: '20px',
  },
});

export default appbarStyles;
