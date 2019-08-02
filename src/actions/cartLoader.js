import store from "../store";
import axios from "axios";
export function greet(greeting) {
  store.dispatch({
    type: "GREETING",
    payload: greeting
  });
}

export function loadProducts() {
  axios.get("http://localhost:3001/products").then(resp => {
    store.dispatch({
      type: "LOAD_ALL",
      payload: resp.data
    });
  });
}
//add cart action
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};
//remove item action
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};
//subtract qt action
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};
//add qt action
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};
