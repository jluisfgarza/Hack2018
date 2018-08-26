import React, { Component } from "react";

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
      </div>
    );
  }
}

export default App;
