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
