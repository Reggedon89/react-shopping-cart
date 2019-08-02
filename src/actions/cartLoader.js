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
export function addToCart(id) {
  axios.get("http://localhost:3001/products/" + id).then(resp => {
    store.dispatch({
      type: "ADD_TO_CART",
      payload: { ...resp.data, quantity: 1, total_price: resp.data.price }
    });
  });
}
export function remove(id) {
  store.dispatch({
    type: "REMOVE_ITEM",
    payload: id
  });
}
//remove item action
// export const removeItem = id => {
//   return {
//     type: REMOVE_ITEM,
//     id
//   };
// };
//subtract qt action
// export const subtractQuantity = id => {
//   return {
//     type: SUB_QUANTITY,
//     id
//   };
// };
//add qt action
// export const addQuantity = id => {
//   return {
//     type: ADD_QUANTITY,
//     id
//   };
// };
