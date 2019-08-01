import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./Products";
// import Album from "./Album";
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { products: [], filteredProducts: [] };
  // }
  render() {
    return (
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className="row">
          <div className="col">
            <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
          <div className="col2" />
        </div>
      </div>
    );
  }
}
export default App;
