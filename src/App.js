import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export const asyncFunc = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Success!");
    }, 1000);
  });
};

class App extends Component {
  // static asyncFunc = () => {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve("Success!");
  //     }, 1000);
  //   });
  // };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
