import React, { Component } from "react";
import "./App.css";

import Facebook from "./components/facebook/Facebook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Facebook />
      </div>
    );
  }
}

export default App;
