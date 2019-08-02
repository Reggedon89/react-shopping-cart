import React, { Component } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Album from "./Album";
import store from "../store";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="app-wrapper">
            <Album />
            {/* <Navbar /> */}
            {/* <Home /> */}
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
export default App;
