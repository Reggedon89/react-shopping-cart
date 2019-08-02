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

  return state;
};

export default cartReducer;
