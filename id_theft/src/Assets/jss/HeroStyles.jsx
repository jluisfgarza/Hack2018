// Hero Styles

const heroStyle = theme => ({
  root: {
    marginTop: '100px',
    marginBottom: '100px',
    [theme.breakpoints.down("sm")]: {
      marginTop: '70px',
    },
  },
  h1:{
    fontSize: '50px',
    lineHeight: '1.5em',
    [theme.breakpoints.down("xs")]: {
      fontSize: '36px',
    },
  },
  h3:{
    marginTop: '20px',
    marginBottom:'30px',
    fontSize: '24px',
    lineHeight: '1.5em',
    fontWeight: '300',
    [theme.breakpoints.down("xs")]: {
      fontSize: '20px',
    },
  },
  img:{
    maxWidth: '350px',
    margin: '0 auto',
    display: 'block',
    [theme.breakpoints.down("sm")]: {
      maxWidth: '300px',
      marginTop: '30px',
    }
  },
  code:{
    margin: '0px auto 150px auto',
    maxWidth: '500px',
  },
  
});

export default heroStyle;
