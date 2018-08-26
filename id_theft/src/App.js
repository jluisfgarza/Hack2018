import React, { Component } from "react";
// import "./App.css";

import Facebook from "./Components/Facebook/Facebook";
import Navbar from "./Layout/Navbar";
import Landing from "./Components/Landing/Landing";
import Footer from "./Layout/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Landing/>
        <Footer/>
        <Facebook />
      </div>
    );
  }
}

export default App;
