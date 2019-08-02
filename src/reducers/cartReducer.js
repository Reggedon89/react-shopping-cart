import { ADD_TO_CART } from "../actions/cartLoader";

const initState = {
  items: [],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_ALL":
      return { ...state, items: action.payload };
  }
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  return state;
};

export default cartReducer;
