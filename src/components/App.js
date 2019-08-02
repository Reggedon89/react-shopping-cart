import React, { Component } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Album from "./Album";
import store from "../store";
import Home from "./Home";
import Cart from "./Cart";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="app-wrapper">
            <Route exact path="/" component={Album} />
            <Route path="/cart" component={Cart} />
            {/* <Navbar /> */}
            {/* <Home /> */}
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
export default App;
