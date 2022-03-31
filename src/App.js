import React, { Component } from "react";
import History from "./components/History";
import logo from "./logo.svg";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <History />
      </div>
    );
  }
}

export default App;
