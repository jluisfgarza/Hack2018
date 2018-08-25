import React, { Component } from "react";
// import "./App.css";

import Facebook from "./components/facebook/Facebook";
import Navbar from "./layout/Navbar";
import Landing from "./Components/Landing/Landing";
import Footer from "./layout/Footer";

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
