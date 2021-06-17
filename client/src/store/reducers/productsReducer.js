import actiontypes from "../actiontypes";

const initState = {
  products: [],
  loading: false,
  error: "",
  success: "",
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().products.set:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
