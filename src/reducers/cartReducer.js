const initState = {
  items: [],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_ALL":
      return { ...state, items: action.payload };
    case "ADD_TO_CART":
      let existed_item = state.addedItems.find(
        item => action.payload.id === item.id
      );
      if (existed_item) {
        existed_item.quantity += 1;
        existed_item.total_price = existed_item.quantity * existed_item.price;
      } else {
        return { ...state, addedItems: [...state.addedItems, action.payload] };
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        addedItems: state.addedItems.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
