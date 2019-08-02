import React from "react";
import { useSelector } from "react-redux";
import cartReducer from "../reducers/cartReducer";
import { remove } from "../actions/cartLoader";
import { addToCart } from "../actions/cartLoader";

export default props => {
  const addedItems = useSelector(appState => appState.addedItems);
  function handleClick(id) {
    addToCart(id);
    console.log(id);
  }
  return (
    <div>
      {addedItems.map(item => {
        return (
          <h1>
            <img src={"/assets/" + item.sku + "_1.jpg"} alt={item.title} />
            {item.title}
            <br />
            {item.quantity}
            <br />
            {item.total_price}

            <button
              onClick={() => {
                remove(item.id);
              }}
            >
              Remove
            </button>
            <button
              onClick={() => {
                handleClick(item.id);
              }}
            >
              Add
            </button>
          </h1>
        );
      })}

      <div id="total">
        <h1>
          Total $
          {addedItems
            .reduce((a, b) => {
              return a + b.total_price;
            }, 0)
            .toFixed(2)}
        </h1>
      </div>
    </div>
  );
};
