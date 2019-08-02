import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { loadProducts } from "../actions/cartLoader";

export default props => {
  const product = useSelector(appState => appState.items);
  console.log(product);
  useEffect(() => {
    loadProducts();
  }, []);

  return product.map(item => {
    return (
      <div key={item.id} className="card">
        <div className="card-image">
          <img src={"/assets/" + item.sku + "_1.jpg"} alt={item.id} />
          <span>{item.title}</span>
          <button type="submit">Add</button>
        </div>

        <div className="card-content">
          <p>{item.description}</p>
          <p>
            <b>Price: {item.price}</b>
          </p>
        </div>
      </div>
    );
  });
};
